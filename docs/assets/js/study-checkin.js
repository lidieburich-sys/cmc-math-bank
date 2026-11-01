'use strict';

// Explicit completion is separate from answer views and correctness ratings.
const CMC_CHECKIN_KEY='cmc-study-checkins-v1';
let cmcCheckins=[],checkinStorageOK=true;
function cmcCheckinId(id){
 if(typeof id!=='string'||(!Object.prototype.hasOwnProperty.call(cmcQmap,id)&&!QIDS.has(id)))return null;
 const canonical=window.CMC_QA_LATEX?.[id]?.canonical||id;
 return Object.prototype.hasOwnProperty.call(cmcQmap,canonical)?canonical:QIDS.has(id)?id:null;
}
function cmcCleanCheckins(raw){
 if(!Array.isArray(raw))return [];
 const unique=new Map();
 for(const item of raw){
  if(!item||typeof item!=='object')continue;
  const qid=cmcCheckinId(item.qid),time=item.time;
  if(!qid||!Number.isFinite(time)||time<=0||time>8640000000000000)continue;
  let date=typeof item.date==='string'?item.date:'';
  if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(Date.parse(date+'T12:00:00Z'))||new Date(date+'T12:00:00Z').toISOString().slice(0,10)!==date)date=day(new Date(time));
  const key=qid+'@'+date,previous=unique.get(key);
  if(!previous||time<previous.time)unique.set(key,{qid,time,date});
 }
 return [...unique.values()].sort((a,b)=>a.time-b.time);
}
try{cmcCheckins=cmcCleanCheckins(JSON.parse(localStorage.getItem(CMC_CHECKIN_KEY)||'[]'))}catch(e){checkinStorageOK=false}
function cmcCheckinWarning(){const warning=document.getElementById('storage-warning');if(warning)warning.classList.toggle('hidden',checkinStorageOK&&storageOK&&corpusStorageOK&&(typeof plusStorageOK==='undefined'||plusStorageOK))}
function cmcStoreCheckins(records=cmcCheckins){
 try{localStorage.setItem(CMC_CHECKIN_KEY,JSON.stringify(records));cmcCheckins=records;checkinStorageOK=true}
 catch(e){checkinStorageOK=false;toast('打卡未保存，请导出备份并检查浏览器存储后重试')}
 cmcCheckinWarning();return checkinStorageOK;
}
function cmcReadCheckins(){
 try{return cmcCleanCheckins(JSON.parse(localStorage.getItem(CMC_CHECKIN_KEY)||'[]'))}
 catch(e){checkinStorageOK=false;cmcCheckinWarning();toast('暂时无法读取打卡记录，请稍后重试');return null}
}
function cmcTodayCheckin(id){const qid=cmcCheckinId(id);return cmcCheckins.find(r=>r.qid===qid&&r.date===day())}
function cmcCheckinCurrent(source,id){
 if(!window.CMC_QA_LATEX?.[id]||!cmcCheckinId(id))return false;
 const path=route().path;
 return source==='drill'?path==='drill'&&cmcDrillSession?.ids[cmcDrillSession.index]===id:source==='text'?QIDS.has(id)&&path==='question/'+id:source==='corpus'&&!!cmcQmap[id]&&path==='corpus/'+id;
}
function cmcCheckinControls(source,id){
 const checked=cmcTodayCheckin(id),available=!!window.CMC_QA_LATEX?.[id]&&!!cmcCheckinId(id);
 return `<div class="qa-checkin-actions"><button type="button" class="qa-checkin-button ${checked?'is-checked':''}" onclick="cmcCheckIn('${source}','${id}')" ${checked||!available?'disabled':''}>${checked?'✓ 今日已打卡':'学完打卡'}</button>${checked?`<button type="button" class="qa-checkin-undo" onclick="cmcUndoCheckin('${source}','${id}')" aria-label="撤销本题今日打卡">撤销</button>`:''}</div>`;
}
function cmcRefreshCheckinControls(){
 const panel=document.getElementById('qa-checkin');
 if(panel?.dataset.source&&panel.dataset.question)panel.innerHTML=cmcCheckinControls(panel.dataset.source,panel.dataset.question);
}
function cmcCheckIn(source,id){
 if(!cmcCheckinCurrent(source,id))return;
 const stored=cmcReadCheckins();if(!stored)return;
 const qid=cmcCheckinId(id),date=day();
 if(stored.some(r=>r.qid===qid&&r.date===date)){cmcCheckins=stored;cmcRefreshCheckinControls();return}
 if(!cmcStoreCheckins([...stored,{qid,date,time:Date.now()}]))return;
 cmcRefreshCheckinControls();toast('打卡成功，已加入学习记录');
}
function cmcUndoCheckin(source,id){
 if(!cmcCheckinCurrent(source,id))return;
 const stored=cmcReadCheckins();if(!stored)return;
 const qid=cmcCheckinId(id),date=day();
 if(!cmcStoreCheckins(stored.filter(r=>r.qid!==qid||r.date!==date)))return;
 cmcRefreshCheckinControls();toast('已撤销本题今日打卡');
}
function cmcCheckinEntry(record){
 const q=cmcQmap[record.qid],text=q?null:getQ(record.qid),state=cmcEntries().find(row=>row.id===record.qid);
 return {id:record.qid,title:q?q.title:text.title,href:(q?'corpus/':'question/')+record.qid,status:state?.status||'new',star:!!state?.star,note:state?.note||'',time:record.time,checkedAt:record.time,date:record.date,source:q?'corpus':'text',meta:q?cmcMeta(q).topics.map(cmcTopicName).join(' · '):text.topics.map(id=>getK(id).name).join(' · ')};
}
function cmcCheckinSummary(){
 const dates=new Set(cmcCheckins.map(r=>r.date)),today=day();
 return {today:cmcCheckins.filter(r=>r.date===today).length,total:new Set(cmcCheckins.map(r=>r.qid)).size,days:dates.size,times:cmcCheckins.length};
}
function cmcCheckinTime(record){return `${record.date||day(new Date(record.time))} ${new Date(record.time).toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit',hour12:false})}`}
window.addEventListener('storage',event=>{
 if(event.key!==CMC_CHECKIN_KEY&&event.key!==null)return;
 const stored=cmcReadCheckins();if(!stored)return;cmcCheckins=stored;
 cmcRefreshCheckinControls();if(['learning','home','topics','papers'].includes(route().path))render();
});
window.addEventListener('focus',()=>{cmcRefreshCheckinControls()});


'use strict';
const DATA=JSON.parse(document.getElementById('dataset').textContent);
const Q=DATA.questions, K=DATA.knowledge;
const QIDS=new Set(Q.map(q=>q.id));
const STORE='cmc-math-space-v1';
const INTERVALS=[1,2,4,7,15,30];
const PATHS={
settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/>',
search:'<circle cx="10.7" cy="10.7" r="6.7"/><path d="m16 16 4.5 4.5"/>',
moon:'<path d="M20.6 13.1A8.5 8.5 0 0 1 10.9 3.4 8.6 8.6 0 1 0 20.6 13.1Z"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
back:'<path d="M20 12H4m6-6-6 6 6 6"/>',
chevron:'<path d="m9 5 7 7-7 7"/>',
down:'<path d="m6 9 6 6 6-6"/>',
book:'<path d="M12 5.5C8.5 3 5 3 2.5 4v15c3-1 6.2-1 9.5 1.5 3.3-2.5 6.5-2.5 9.5-1.5V4c-2.5-1-6-1-9.5 1.5ZM12 5.5v15"/>',
files:'<rect x="7" y="5" width="13" height="16" rx="2"/><path d="M16 5V3H4v14h3m3-8h7m-7 4h7m-7 4h4"/>',
graph:'<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="m10.5 7.2-4 8.5m7-8.5 4 8.5M7.5 18h9"/>',
clock:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6m-3 0v3m6.5 1 1.5-1.5"/>',
check:'<path d="m5 12 4 4L19 6"/>',
checkCircle:'<circle cx="12" cy="12" r="9"/><path d="m7.5 12 3 3 6-6"/>',
bookmark:'<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
star:'<path d="m12 3 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.5 6.3-.9L12 3Z"/>',
pen:'<path d="m15.5 3.5 5 5-12 12L3 21l.5-5.5 12-12Zm-2 2 5 5M3.5 15.5l5 5"/>',
refresh:'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M19.3 8.5a8 8 0 0 0-13.1-3L4 8m16 8-2.2 2.5a8 8 0 0 1-13.1-3"/>',
lightbulb:'<path d="M8.5 17v-2c-5-3.8-3-11 3.5-11s8.5 7.2 3.5 11v2h-7ZM9 20h6m-5 2h4"/><path d="M10 7a4 4 0 0 0-2 3"/>',
help:'<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 5 2.2c-1 .8-2 1.2-2 2.8m0 3h.01"/>',
close:'<path d="m6 6 12 12M6 18 18 6"/>',
lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
flag:'<path d="M5 22V3m0 0c6-5 8 5 15 0v11c-7 5-9-5-15 0"/>',
play:'<path d="m8 4 12 8-12 8V4Z"/>',
pause:'<path d="M8 5v14M16 5v14"/>',
chart:'<path d="M3 3v18h18M7 16v-4m5 4V7m5 9v-7"/>',
export:'<path d="M12 3v12m-4-4 4 4 4-4M4 15v6h16v-6"/>',
import:'<path d="M12 16V4m-4 4 4-4 4 4M4 15v6h16v-6"/>',
focus:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
print:'<path d="M7 8V3h10v5M7 17H3V9h18v8h-4M7 14h10v7H7v-7ZM17 11h1"/>',
link:'<path d="m9 15 6-6m-8 3-2 2a4 4 0 0 0 5.7 5.7l2-2M11 6.3l2-2A4 4 0 0 1 18.7 10l-2 2"/>',
spark:'<path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Z"/>',
shield:'<path d="M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4Z"/><path d="m8 12 3 3 5-6"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-14 5h2m4 0h2m-8 3h2"/>',
trash:'<path d="M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15m-8 4v7m4-7v7"/>',
folder:'<path d="M3 5h7l2 3h9v12H3V5Z"/>',
info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.01"/>'
};
function ic(n,cls=''){return `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true">${PATHS[n]||PATHS.book}</svg>`}
function hydrate(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=ic(el.dataset.icon);el.removeAttribute('data-icon')})}
const $=s=>document.querySelector(s);
const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function getQ(id){return Q.find(q=>q.id===id)||Q[0]}
function getK(id){return K.find(k=>k.id===id)}
function day(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function dayPlus(n,base=new Date()){const d=new Date(base);d.setDate(d.getDate()+n);return day(d)}
function cleanExam(raw){
 if(!raw||!Array.isArray(raw.ids)||!raw.ids.length||raw.ids.some(id=>!QIDS.has(id)))return null;
 const ids=[...new Set(raw.ids)].slice(0,12),answers={},grades={},flags={};
 ids.forEach(id=>{answers[id]=typeof raw.answers?.[id]==='string'?raw.answers[id].slice(0,100000):'';let g=raw.grades?.[id];grades[id]=g!==null&&g!==undefined&&Number.isFinite(+g)?Math.max(0,Math.min(getQ(id).points,Math.round(+g))):null;flags[id]=!!raw.flags?.[id]});
 return {id:String(raw.id||Date.now()),ids,name:String(raw.name||'真题选集练习').slice(0,200),status:raw.status==='finished'?'finished':'active',index:Math.max(0,Math.min(ids.length-1,Number(raw.index)||0)),answers,grades,flags,matched:ids.filter(id=>Array.isArray(raw.matched)&&raw.matched.includes(id)),paused:!!raw.paused,remaining:Math.max(0,Math.min(86400,Number(raw.remaining)||0)),deadline:Number(raw.deadline)||Date.now(),duration:Math.min(86400,Math.max(60,Number(raw.duration)||1800)),started:Number(raw.started)||Date.now(),finished:Number(raw.finished)||0,saved:!!raw.saved};
}
function defaults(){return {version:1,fav:[],notes:{},wrong:{},viewed:{},logs:[],last:'q24-1',theme:'light',exam:null,reports:[]}}
function cleanViewed(raw,ids){if(!raw||typeof raw!=='object'||Array.isArray(raw))return {};return Object.fromEntries(ids.filter(id=>Number.isFinite(raw[id])&&raw[id]>0&&raw[id]<=8640000000000000).map(id=>[id,raw[id]]))}
function validate(raw){
 if(!raw||raw.version!==1)throw Error('不是CMC 的 v1 记录文件');
 const s=defaults();
 s.fav=Array.isArray(raw.fav)?[...new Set(raw.fav.filter(id=>QIDS.has(id)))]:[];
 Q.forEach(q=>{if(typeof raw.notes?.[q.id]==='string')s.notes[q.id]=raw.notes[q.id].slice(0,100000);const w=raw.wrong?.[q.id];if(w&&typeof w==='object')s.wrong[q.id]={reason:['概念不清','方法不会','计算失误','证明不严谨'].includes(w.reason)?w.reason:'方法不会',created:typeof w.created==='string'?w.created:day(),due:/^\d{4}-\d{2}-\d{2}$/.test(w.due)?w.due:day(),stage:Math.max(0,Math.min(6,parseInt(w.stage)||0))}});
 s.logs=Array.isArray(raw.logs)?raw.logs.filter(l=>l&&QIDS.has(l.qid)&&['independent','assisted','wrong'].includes(l.result)&&Number.isFinite(+l.time)).slice(-5000).map(l=>({id:String(l.id),qid:l.qid,time:+l.time,date:day(new Date(+l.time)),result:l.result,assistance:!!l.assistance,source:l.source==='exam'?'exam':'practice'})):[];
 s.viewed=cleanViewed(raw.viewed,[...QIDS]);s.last=QIDS.has(raw.last)?raw.last:s.last;s.theme='light';s.exam=cleanExam(raw.exam);s.reports=Array.isArray(raw.reports)?raw.reports.slice(-30).map(cleanExam).filter(r=>r?.status==='finished'):[];
 return s;
}
let storageOK=true,S=defaults();
try{const saved=localStorage.getItem(STORE);if(saved)S=validate(JSON.parse(saved));localStorage.setItem(STORE,JSON.stringify(S))}catch(e){storageOK=false}
function persist(){try{localStorage.setItem(STORE,JSON.stringify(S));storageOK=true}catch(e){storageOK=false}$('#storage-warning').classList.toggle('hidden',storageOK&&(typeof plusStorageOK==='undefined'||plusStorageOK)&&(typeof corpusStorageOK==='undefined'||corpusStorageOK)&&(typeof checkinStorageOK==='undefined'||checkinStorageOK));updateBadge();return storageOK}
function syncReport(){if(S.exam?.status==='finished'){const i=S.reports.findIndex(r=>r.id===S.exam.id);const clone=JSON.parse(JSON.stringify(S.exam));if(i>=0)S.reports[i]=clone;else S.reports.push(clone);S.reports=S.reports.slice(-30)}persist()}
function updateBadge(){const n=typeof cmcCheckins!=='undefined'?cmcStudyStats().wrong:0;$('#review-badge').innerHTML=n?`<span class="badge">${n}</span>`:''}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toast.timeout);toast.timeout=setTimeout(()=>el.classList.remove('show'),3000)}
function modal(title,body){$('#modal-title').textContent=title;$('#modal-body').innerHTML=body;hydrate($('#modal'));if(!$('#modal').open)$('#modal').showModal()}
function closeModal(){$('#modal').close()}
$('#modal').addEventListener('click',e=>{if(e.target===$('#modal')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeModal()}});
function applyTheme(){S.theme='light';document.documentElement.dataset.theme='light'}
function stars(n){return `<span class="stars" aria-label="难度 ${n} 星">${'★'.repeat(n)}<span class="off">${'★'.repeat(5-n)}</span></span>`}
function topicChips(q,max=2){return q.topics.slice(0,max).map(id=>`<span class="chip purple">${getK(id).name}</span>`).join('')}
function dueReviews(){return Object.entries(S.wrong).filter(([id,w])=>QIDS.has(id)&&w.due<=day()).sort((a,b)=>a[1].due.localeCompare(b[1].due))}
function latest(id){return [...S.logs].reverse().find(l=>l.qid===id)}
function stats(){const set=new Set(S.logs.map(l=>l.qid));const independent=S.logs.filter(l=>l.source==='practice'&&!l.assistance);return {attempted:set.size,mastered:Q.filter(q=>latest(q.id)?.result==='independent').length,rate:independent.length?Math.round(independent.filter(l=>l.result==='independent').length/independent.length*100):null,notes:Object.values(S.notes).filter(s=>s.trim()).length}}
function stateLabel(id){const l=latest(id);return l?{independent:'独立做对',assisted:'看解析后会',wrong:'仍有卡点'}[l.result]:'尚未练习'}
function streak(){const days=new Set(S.logs.map(l=>l.date));let count=0,d=new Date();if(!days.has(day(d)))d.setDate(d.getDate()-1);while(days.has(day(d))){count++;d.setDate(d.getDate()-1)}return count}
function route(){const raw=(location.hash||'#topics').slice(1);const [path,qs]=raw.split('?');return {path:path||'topics',params:new URLSearchParams(qs||'')}}
let bank={text:'',year:'all',type:'all',topic:'all',difficulty:'all',status:'all'},know={text:'',group:'all',sort:'count'},examOptions={mode:'edition',edition:2024,topic:'all',difficulty:'all',count:3,minutes:30},learnTab='checkins',view=null,focusMode=false,lastRoute='';
function navigate(hash){if(location.hash==='#'+hash){render();window.scrollTo({top:0,behavior:'smooth'})}else location.hash=hash}
function render(){
 let r=route();
 // Keep old bookmarks, while presenting only the three current study sections.
 const aliases={home:'topics',knowledge:'topics',methods:'topics',cards:'topics',lab:'topics',training:'topics',archive:'papers'};
 const destination=aliases[r.path];
 if(destination){history.replaceState(null,'','#'+destination);r=route()}
 const page=r.path.split('/')[0];
 const navPage=['learning','worksheet'].includes(page)||r.params.get('from')==='learning'?'learning':page==='papers'||page==='archive'||page==='exam'||r.params.get('paper')?'papers':'topics';
 document.querySelectorAll('[data-nav]').forEach(a=>{a.classList.toggle('active',a.dataset.nav===navPage);if(a.dataset.nav===navPage)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 document.body.classList.toggle('qa-page-mode',page==='question'||page==='drill'||r.path.startsWith('corpus/'));
 document.body.classList.remove('focus-mode');
 try{
  if(page==='question'){const id=r.path.split('/')[1];if(!QIDS.has(id)){document.body.classList.remove('qa-page-mode');$('#app').innerHTML='<div class="page"><p>没有找到这道题。</p><a href="#corpus">返回题库</a></div>';return}if(!view||view.id!==id){view={id,steps:0,answer:false,hint:false,assisted:false,tab:'steps',token:String(Date.now())};S.last=view.id;persist()}renderProblem()}
  else if(page==='archive')renderArchive();
  else if(page==='papers')renderPaperLibrary();
  else if(page==='corpus')cmcRenderCorpus();
  else if(page==='topics')cmcRenderTopics();
  else if(page==='drill')cmcRenderDrill();
  else if(page==='drill-summary')cmcRenderDrillSummary();
  else if(page==='bank'){if(r.path+'?'+r.params.toString()!==lastRoute){bank={text:r.params.get('q')||'',year:r.params.get('year')||'all',type:r.params.get('type')||'all',topic:r.params.get('topic')||'all',difficulty:r.params.get('difficulty')||'all',status:r.params.get('status')||'all'}}renderBank()}
  else if(page==='knowledge')renderKnowledge();
  else if(page==='training')renderTraining();
  else if(page==='methods')renderMethods();
  else if(page==='cards')renderCards();
  else if(page==='lab')renderLab();
  else if(page==='worksheet')renderWorksheet();
  else if(page==='exam')renderExam();
  else if(page==='learning')renderLearning();
  else renderHome();
 }catch(err){console.error(err);$('#app').innerHTML=`<section class="card empty"><h2>这个页面暂时没有打开</h2><p>学习记录没有被主动清除。你可以返回首页，或先导出记录。</p><div class="row"><button class="btn primary" onclick="navigate('home')">返回首页</button><button class="btn" onclick="exportData()">导出记录</button></div></section>`}
 lastRoute=r.path+'?'+r.params.toString();hydrate();updateBadge();
}
window.addEventListener('hashchange',()=>{render();window.scrollTo({top:0,behavior:'instant'})});
function header(eyebrow,title,desc,extra=''){return `<div class="page-header"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${desc}</p></div>${extra}</div>`}
function empty(title,desc,button='去练一道题',href='bank',symbol='book'){return `<div class="empty"><span class="empty-symbol">${ic(symbol)}</span><h3>${title}</h3><p>${desc}</p>${button?`<a class="btn soft small" href="#${href}">${button}${ic('arrow')}</a>`:''}</div>`}
function questionCard(q,queue){const l=latest(q.id);return `<a href="${escapeHTML(practiceQuestionHref('text',q.id,queue))}" class="card question-card"><div class="meta"><span>第 ${q.edition} 届 · ${q.year} · 初赛 / 非数学 B 类</span>${S.fav.includes(q.id)?`<span class="purple">${ic('bookmark')}</span>`:stars(q.difficulty)}</div><h3>${q.title}</h3><div class="formula-mini">${q.formula}</div><div class="tags">${topicChips(q)}</div><div class="question-foot"><span>${q.number} · ${q.type} · ${q.points} 分</span><span class="row ${l?.result==='independent'?'green':''}" style="gap:5px">${stateLabel(q.id)}${ic('arrow')}</span></div></a>`}
function bankMatches(bankFilter=bank){const bank=bankFilter;return Q.filter(q=>{const terms=(q.title+' '+q.stem+' '+q.year+' 第'+q.edition+'届 '+q.number+' '+q.topics.map(id=>getK(id).name).join(' ')+' '+q.tex).toLowerCase();return (!bank.text||terms.includes(bank.text.trim().toLowerCase()))&&(bank.year==='all'||String(q.year)===bank.year)&&(bank.type==='all'||q.type===bank.type)&&(bank.topic==='all'||q.topics.includes(bank.topic))&&(bank.difficulty==='all'||String(q.difficulty)===bank.difficulty)&&(bank.status==='all'||bank.status==='fav'&&S.fav.includes(q.id)||bank.status==='wrong'&&S.wrong[q.id]||bank.status==='new'&&!latest(q.id))})}
function renderBank(){
 $('#app').innerHTML=`<div class="page">${header('','真题解析','按届次、题型或知识点筛选。',`<span class="chip purple">已整理 ${Q.length} 题</span>`)}<section class="card filter-panel"><div class="filter-grid"><div class="search-box">${ic('search')}<input id="bank-search" value="${escapeHTML(bank.text)}" placeholder="搜索题目、知识点、届次…" oninput="bank.text=this.value;renderBankResults()" aria-label="搜索真题"></div><select class="input" aria-label="按届次筛选" onchange="bank.year=this.value;renderBankResults()"><option value="all">全部届次</option><option value="2024" ${bank.year==='2024'?'selected':''}>第 16 届 · 2024</option><option value="2023" ${bank.year==='2023'?'selected':''}>第 15 届 · 2023</option></select><select class="input" aria-label="按题型筛选" onchange="bank.type=this.value;renderBankResults()"><option value="all">全部题型</option>${['填空题','解答题','证明题'].map(t=>`<option ${bank.type===t?'selected':''}>${t}</option>`).join('')}</select><select class="input" aria-label="按知识点筛选" onchange="bank.topic=this.value;renderBankResults()"><option value="all">全部知识点</option>${K.map(k=>`<option value="${k.id}" ${bank.topic===k.id?'selected':''}>${k.name}</option>`).join('')}</select><select class="input" aria-label="难度筛选" onchange="bank.difficulty=this.value;renderBankResults()"><option value="all">全部难度</option>${[1,2,3,4,5].map(n=>`<option value="${n}" ${bank.difficulty===String(n)?'selected':''}>${n} 星</option>`).join('')}</select></div><div class="filter-bottom"><div class="filter-chips" id="bank-status">${bankStatusButtons()}</div><button class="text-btn muted" onclick="resetBank()">重置筛选</button></div></section><div id="bank-results"></div></div>`;renderBankResults();
}
function bankStatusButtons(){return [['all','全部题目'],['new','尚未练习'],['fav','我的收藏'],['wrong','错题重做']].map(([id,t])=>`<button class="filter-chip ${bank.status===id?'active':''}" onclick="bank.status='${id}';renderBankResults()">${t}</button>`).join('')}
function renderBankResults(){const a=bankMatches(),queue=practiceCreateQueue('text',bank);$('#bank-status').innerHTML=bankStatusButtons();$('#bank-results').innerHTML=`<div class="result-meta"><span>找到 <strong class="purple">${a.length}</strong> 道真题 <span style="margin-left:8px">/ 共 ${Q.length} 道样题</span></span><span>按届次排序</span></div>${a.length?`<div class="question-grid">${a.map(q=>questionCard(q,queue)).join('')}</div>`:`<div class="card">${empty('暂时没有匹配的题目','这版互动题库目前包含 12 道精讲题。想阅读其他年份原卷请到「历届原卷」。','','bank','search')}<div style="text-align:center;margin:-17px 0 27px"><button class="btn soft small" onclick="resetBank()">清除筛选</button></div></div>`}`}
function resetBank(){bank={text:'',year:'all',type:'all',topic:'all',difficulty:'all',status:'all'};renderBank()}
function restartProblem(id,query){const r=route();if(query===undefined)query=r.path===`question/${id}`?r.params.toString():'';view={id,steps:0,answer:false,hint:false,assisted:false,tab:'steps',token:String(Date.now())};const target='question/'+id+(query?'?'+query:'');if(location.hash==='#'+target){renderProblem();window.scrollTo({top:0,behavior:'smooth'})}else navigate(target)}
function renderProblem(){const q=getQ(view.id);S.last=q.id;renderMinimalQuestion('text',q.id)}
function detailContent(q){
 if(view.tab==='notes')return `<section class="card pad"><div class="note-heading"><h3 style="font-size:14px">我的笔记</h3><small id="note-status">${storageOK?'本机自动保存':'临时保存，请导出'}</small></div><textarea class="input" id="problem-note" maxlength="100000" placeholder="记录解题过程、疑问或错因……" oninput="saveNote('${q.id}',this.value)">${escapeHTML(S.notes[q.id]||'')}</textarea></section>`;
 if(view.tab==='pitfalls')return `<section><h3 style="font-size:14px;margin-bottom:15px">易错点</h3>${q.mistake.map(t=>`<div class="pitfall">${ic('info')}<span>${t}</span></div>`).join('')}<div class="method-box"><h3>${ic('graph')} 方法总结</h3><p>${q.method}</p></div><section class="card pad"><span class="chip green">变式训练</span><h3 style="font-size:14px;margin:12px 0 8px">变式题</h3><p style="font-size:12px;line-height:1.95">${q.variant}</p></section></section>`;
 return `<section class="hint-box"><h3>${ic('lightbulb')}解题提示</h3>${view.hint?`<p>${q.hint}</p>`:`<p>点击查看本题的解题切入点。</p><button class="btn small" onclick="view.hint=true;view.assisted=true;renderProblem()">显示提示${ic('arrow')}</button>`}</section>
 <div class="step-progress"><div class="row"><button class="btn primary small" onclick="nextStep()" ${view.steps>=q.steps.length?'disabled':''}>${view.steps>=q.steps.length?'已展开全部步骤':'展开第 '+(view.steps+1)+' 步'}${ic('arrow')}</button><button class="btn small ghost" onclick="view.steps=${q.steps.length};view.assisted=true;renderProblem()">全部展开</button></div><p>已展开 ${view.steps} / ${q.steps.length} 步</p></div>
 ${q.steps.map((s,i)=>`<article class="step-card ${i>=view.steps?'locked':''}"><div class="step-head"><span class="step-num">${String(i+1).padStart(2,'0')}</span><h4>${s.title}</h4>${ic(i>=view.steps?'lock':'check')}</div>${i<view.steps?`<div class="step-body">${s.body}<button class="why" onclick="explainStep(${i})">${ic('help')}看不懂这一步</button></div>`:''}</article>`).join('')}
 ${view.steps===q.steps.length?`<div class="method-box"><h3>${ic('spark')} 方法总结</h3><p>${q.method}</p></div>`:''}`;
}
function setDetailTab(tab){view.tab=tab;if(tab==='pitfalls')view.assisted=true;renderProblem()}
function nextStep(){if(!view)return;view.steps=Math.min(getQ(view.id).steps.length,view.steps+1);view.assisted=true;view.tab='steps';const y=window.scrollY;renderProblem();window.scrollTo({top:y,behavior:'instant'})}
function explainStep(i){const q=getQ(view.id),s=q.steps[i];modal('步骤说明',`<span class="chip purple">步骤 ${i+1} · ${s.title}</span><p style="margin:17px 0">${s.why}</p><div class="dialog-actions"><button class="btn primary small" onclick="closeModal()">关闭</button></div>`)}
function toggleFav(id){if(S.fav.includes(id)){S.fav=S.fav.filter(x=>x!==id);toast('已取消收藏')}else{S.fav.push(id);toast('已收藏，在学习中心可以找到')}persist();renderProblem()}
function saveNote(id,value){S.notes[id]=value;const ok=persist();const el=$('#note-status');if(el)el.textContent=ok?'已保存到本机':'仅暂存内存，请导出'}
function addWrong(id){const w=S.wrong[id];modal(w?'修改错因与复习安排':'添加错题',`<p style="font-size:12px">${getQ(id).title}</p><div class="reason-options">${['概念不清','方法不会','计算失误','证明不严谨'].map((r,i)=>`<label class="reason-choice"><input type="radio" name="reason" value="${r}" ${(w?.reason||'方法不会')===r?'checked':''}>${r}</label>`).join('')}</div><div class="dialog-actions">${w?`<button class="btn danger small" onclick="removeWrong('${id}');closeModal()">移出错题本</button>`:''}<button class="btn primary small" onclick="saveWrong('${id}')">保存卡点</button></div>`)}
function saveWrong(id){const reason=document.querySelector('input[name="reason"]:checked')?.value||'方法不会';const old=S.wrong[id];S.wrong[id]={reason,created:old?.created||day(),due:old?.due||day(),stage:old?.stage||0};persist();closeModal();render();toast('已记录错因，并保留复习安排')}
function removeWrong(id){delete S.wrong[id];persist();render();toast('已移出错题本，原笔记和练习记录仍保留')}
function rateQuestion(result){
 const id=view.id,r=result==='wrong'?'wrong':view.assisted?'assisted':'independent';
 const log={id:`${id}:${view.token}`,qid:id,time:Date.now(),date:day(),result:r,assistance:view.assisted,source:'practice'};
 const existing=S.logs.findIndex(l=>l.id===log.id);if(existing>=0)S.logs[existing]=log;else S.logs.push(log);
 if(result==='wrong'){const old=S.wrong[id];S.wrong[id]={reason:old?.reason||'方法不会',created:old?.created||day(),due:dayPlus(1),stage:0}}
 else if(S.wrong[id]){const w=S.wrong[id];const i=Math.min(w.stage,INTERVALS.length-1);w.due=dayPlus(INTERVALS[i]);w.stage=Math.min(6,w.stage+1)}
 trackTraining(id,r);persist();renderProblem();toast(result==='wrong'?'卡点已记录，明天再试一次':view.assisted?'已记录为“看解析后会”，不混入独立正确率':'已记录这次独立完成');
}
function sourceName(q){return q.year===2024?'第十六届全国大学生数学竞赛初赛（非数学B类）试题及答案解析.pdf':'第十五届全国大学生数学竞赛初赛试题及参考答案（非数学B类）(1).pdf'}
function showSource(id){const q=getQ(id),paper=ARCHIVE_LOCAL.find(p=>p.year===q.year&&p.group==='非数学B类');modal('题目来源',`<table class="source-table"><tr><td>试卷</td><td>第 ${q.edition} 届 · ${q.year} · 初赛 / 非数学 B 类</td></tr><tr><td>题号</td><td>${q.number}</td></tr><tr><td>页码</td><td>第 ${q.pages} 页</td></tr><tr><td>分值</td><td>${q.points} 分</td></tr></table><p class="notice mt">解析按参考答案整理；难度为本站标注。</p>${paper?`<div class="dialog-actions"><button class="btn primary small" onclick="closeModal();navigate('archive/${paper.id}')">核对原卷${ic('arrow')}</button></div>`:''}`)}
function knowledgeMatches(){return K.filter(k=>(know.group==='all'||k.group===know.group)&&(!know.text||(k.name+' '+k.desc+' '+k.group).includes(know.text.trim()))).sort((a,b)=>know.sort==='name'?a.name.localeCompare(b.name,'zh'):Q.filter(q=>q.topics.includes(b.id)).length-Q.filter(q=>q.topics.includes(a.id)).length)}
function renderKnowledge(){
 const groups=[...new Set(K.map(k=>k.group))];
 $('#app').innerHTML=`<div class="page">${header('','知识点','按章节浏览，并查看对应的真题。',`<span class="chip">${cmcTopics.length} 个历届专题</span>`)}${toolTabs('knowledge')}<div class="cmc-topic-entry"><div><strong>围绕一个知识点，练得更透。</strong></div><a class="btn primary small" href="#topics">开始专项训练 →</a></div><div class="knowledge-layout"><aside class="card tree"><div class="tree-root">${ic('graph')} 高等数学</div><button class="${know.group==='all'?'active':''}" onclick="setKnowledgeGroup('all')">全部知识点<span>${K.length}</span></button>${groups.map(g=>`<details open><summary><button class="tree-group-title ${know.group===g?'active':''}" onclick="event.preventDefault();event.stopPropagation();setKnowledgeGroup('${g}')">${g} <span>${K.filter(k=>k.group===g).length}</span></button></summary>${K.filter(k=>k.group===g).map(k=>`<button onclick="openKnowledge('${k.id}')">${k.name}<span>${Q.filter(q=>q.topics.includes(k.id)).length}</span></button>`).join('')}</details>`).join('')}</aside>
 <div><div class="knowledge-top"><div class="search-box">${ic('search')}<input value="${escapeHTML(know.text)}" oninput="know.text=this.value;renderKnowledgeResults()" placeholder="搜索知识点、定义或方法" aria-label="搜索知识点"></div><select class="input" style="width:130px" aria-label="排序" onchange="know.sort=this.value;renderKnowledgeResults()"><option value="count" ${know.sort==='count'?'selected':''}>按关联题数</option><option value="name" ${know.sort==='name'?'selected':''}>按名称</option></select></div><div id="knowledge-results"></div></div></div></div>`;
 renderKnowledgeResults();
}
function setKnowledgeGroup(group){know.group=group;renderKnowledge()}

function renderKnowledgeResults(){const items=knowledgeMatches();$('#knowledge-results').innerHTML=items.length?`<div class="knowledge-grid">${items.map(k=>{const qs=Q.filter(q=>q.topics.includes(k.id));const mastered=qs.filter(q=>latest(q.id)?.result==='independent').length;return `<button class="card knowledge-card" onclick="openKnowledge('${k.id}')"><span class="chip ${k.group.includes('积分')?'green':k.group==='无穷级数'?'amber':'purple'}">${k.group}</span><h3>${k.name}</h3><p>${k.desc}</p><div class="knowledge-foot"><span><strong class="purple">${qs.length}</strong> 道关联真题</span><span>${mastered?'已独立做对 '+mastered+' 道':'未练习'}</span></div></button>`}).join('')}</div>`:`<section class="card">${empty('没有找到这个知识点','试试更短的关键词；当前收录 12 个知识点。','','knowledge','search')}</section>`}
function openKnowledge(id){const k=getK(id);if(!k)return;const qs=Q.filter(q=>q.topics.includes(id)),queue=practiceCreateQueue('text',{topic:id});if(route().path.startsWith('question/')&&view)view.assisted=true;modal(k.name,`<span class="chip purple">高等数学 / ${k.group}</span><p style="margin-top:15px">${k.desc}</p><div class="callout neutral" style="margin:17px 0">${k.formula}</div><h3>使用前，检查什么？</h3><p style="font-size:12px">${k.tip}</p>${k.prereqs.length?`<div class="subheading">可以先补的知识</div><div class="row wrap">${k.prereqs.map(t=>`<button class="btn soft small" onclick="openKnowledge('${t}')">${getK(t).name}${ic('chevron')}</button>`).join('')}</div>`:''}<div class="subheading">关联真题 · ${qs.length} 道</div>${qs.map(q=>`<a class="search-hit" href="${escapeHTML(practiceQuestionHref('text',q.id,queue))}" onclick="closeModal()"><strong>${q.title}</strong><small>第 ${q.edition} 届 · ${q.number} · ${q.type} · ${q.points} 分</small></a>`).join('')}`)}
function renderExam(){if(S.exam?.status==='active')return renderActiveExam();if(S.exam?.status==='finished')return renderExamReport();renderExamConfig()}
function renderExamConfig(){
 $('#app').innerHTML=`<div class="page">${header('','模拟练习','从已整理的真题中组卷，并按时作答。',`<span class="chip">${Q.length} 道可选</span>`)}<div class="exam-config"><section class="card exam-options"><h3>组卷设置</h3><div class="pill-tabs"><button class="${examOptions.mode==='edition'?'active':''}" onclick="examOptions.mode='edition';renderExamConfig()">按届次组卷</button><button class="${examOptions.mode==='custom'?'active':''}" onclick="examOptions.mode='custom';renderExamConfig()">自定义组题</button></div>
 ${examOptions.mode==='edition'?`<div class="exam-papers">${[2024,2023].map(y=>{const a=Q.filter(q=>q.year===y);return `<label class="paper-option"><input type="radio" name="exam-edition" value="${y}" ${examOptions.edition===y?'checked':''} onchange="examOptions.edition=${y};updateExamEstimate()"><div><strong>第 ${y-2008} 届 · 非数学 B 类精选</strong><small>${y} 年 · ${a.length} 道已收录题目 · ${a.reduce((s,q)=>s+q.points,0)} 分 · 非完整试卷</small></div></label>`}).join('')}</div>`:`<div class="stack" style="margin:23px 0"><label class="field">训练知识点<select class="input" onchange="examOptions.topic=this.value;updateExamEstimate()"><option value="all">不限知识点</option>${K.map(k=>`<option value="${k.id}" ${examOptions.topic===k.id?'selected':''}>${k.name}</option>`).join('')}</select></label><label class="field">题目难度<select class="input" onchange="examOptions.difficulty=this.value;updateExamEstimate()"><option value="all">不限难度</option>${[1,2,3,4,5].map(n=>`<option value="${n}" ${examOptions.difficulty===String(n)?'selected':''}>${n} 星</option>`).join('')}</select></label><label class="field">目标题数<select class="input" onchange="examOptions.count=+this.value;updateExamEstimate()">${[1,3,5,8,12].map(n=>`<option value="${n}" ${examOptions.count===n?'selected':''}>${n} 道</option>`).join('')}</select></label></div>`}
 <label class="field">练习时长<select class="input" onchange="examOptions.minutes=+this.value;updateExamEstimate()">${[10,20,30,45,60].map(n=>`<option value="${n}" ${examOptions.minutes===n?'selected':''}>${n} 分钟</option>`).join('')}</select></label><div class="callout neutral" id="exam-estimate" style="margin:18px 0;font-size:11px"></div><button class="btn primary" style="width:100%" onclick="startExam()">${ic('play')}开始练习</button></section>
 <section class="card exam-note-card"><div class="exam-illustration"><span class="small-math">f(x)</span>∫<span style="font-size:41px;font-style:italic">dx</span><span class="small-math">→ ∞</span></div><h3>评分方式</h3><div class="principle"><span class="num">1</span><div><strong>交卷后查看答案</strong><p>练习过程中不展示答案。计时按结束时刻计算，切换页面不会让时间停住。</p></div></div><div class="principle"><span class="num">2</span><div><strong>证明题需自评</strong><p>仅对内置的少量常见填空写法做文本匹配。未匹配不等于错，证明题不会自动判满分。</p></div></div><div class="principle"><span class="num">3</span><div><strong>保存复盘</strong><p>交卷后逐题填写自评分。模考自评分单独保存，不混入刷题独立正确率。</p></div></div></section></div></div>`;updateExamEstimate();
}
function examPool(){return examOptions.mode==='edition'?Q.filter(q=>q.year===examOptions.edition):Q.filter(q=>(examOptions.topic==='all'||q.topics.includes(examOptions.topic))&&(examOptions.difficulty==='all'||String(q.difficulty)===examOptions.difficulty))}
function updateExamEstimate(){const pool=examPool(),n=examOptions.mode==='edition'?pool.length:Math.min(examOptions.count,pool.length);$('#exam-estimate').textContent=`本次将出 ${n} 道题，限时 ${examOptions.minutes} 分钟。${examOptions.mode==='custom'&&n<examOptions.count?'该筛选条件仅有 '+n+' 道样题，不重复补题。':'这是一份已收录题目选集，不代表原始整卷。'}`}
function startExam(){let pool=[...examPool()];if(examOptions.mode==='custom'){for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}pool=pool.slice(0,examOptions.count)}if(!pool.length)return toast('当前筛选下没有可用题目');const seconds=examOptions.minutes*60;S.exam={id:'exam-'+Date.now(),ids:pool.map(q=>q.id),name:examOptions.mode==='edition'?`第 ${examOptions.edition-2008} 届非数学 B 类 · 精选练习`:'自定义专题练习',status:'active',index:0,answers:{},grades:{},flags:{},matched:[],paused:false,remaining:seconds,deadline:Date.now()+seconds*1000,duration:seconds,started:Date.now(),finished:0,saved:false};persist();renderExam();window.scrollTo({top:0,behavior:'smooth'})}
function remaining(ex){return ex.paused?ex.remaining:Math.max(0,Math.ceil((ex.deadline-Date.now())/1000))}
function formatTime(s){s=Math.max(0,Math.floor(s));return `${String(Math.floor(s/3600)).padStart(2,'0')}:${String(Math.floor(s%3600/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`}
function renderActiveExam(){const ex=S.exam,q=getQ(ex.ids[ex.index]);const answered=ex.ids.filter(id=>ex.answers[id]?.trim()).length;
 $('#app').innerHTML=`<div class="page">${header('',ex.name,'限时练习')}<div class="exam-toolbar"><div><h3 style="font-size:14px">共 ${ex.ids.length} 题 · ${ex.ids.reduce((s,id)=>s+getQ(id).points,0)} 分</h3><p class="notice"><span id="exam-answered">已填写 ${answered} / ${ex.ids.length}</span> · ${Object.values(ex.flags).filter(Boolean).length} 道标记题</p></div><div class="row"><div class="timer">${ic('clock')}<span id="exam-clock" class="mono">${formatTime(remaining(ex))}</span></div><button class="btn small" onclick="togglePause()">${ic(ex.paused?'play':'pause')}${ex.paused?'继续':'暂停'}</button><button class="btn primary small" onclick="askFinishExam()">交卷${ic('check')}</button></div></div>
 ${ex.paused?`<div class="exam-paused">${ic('pause')}<h2>练习已暂停</h2><p>计时暂停，作答已保留。</p><button class="btn primary" onclick="togglePause()">${ic('play')}继续这次练习</button></div>`:`<div class="exam-layout"><aside class="card exam-navigator"><h3>题目导航</h3><div class="question-numbers">${ex.ids.map((id,i)=>`<button aria-label="第 ${i+1} 题" class="${i===ex.index?'current':''} ${ex.answers[id]?.trim()?'answered':''} ${ex.flags[id]?'flagged':''}" onclick="examGo(${i})">${i+1}</button>`).join('')}</div><div class="divider"></div><p class="notice"><span style="color:var(--green)">●</span> 已填写　<span style="color:var(--amber)">●</span> 已标记</p><p class="notice" style="margin-top:15px">在本网站内切换页面，计时仍继续；需要休息时请点击暂停。</p></aside><article class="card problem-card"><div class="row between"><span class="chip purple">第 ${ex.index+1} / ${ex.ids.length} 题</span><button class="btn small ${ex.flags[q.id]?'soft':''}" onclick="S.exam.flags['${q.id}']=!S.exam.flags['${q.id}'];persist();renderActiveExam()">${ic('flag')}${ex.flags[q.id]?'已标记':'标记本题'}</button></div><div class="row wrap" style="margin:15px 0 5px"><span class="notice">第 ${q.edition} 届 · ${q.number} · ${q.type} · ${q.points} 分</span>${stars(q.difficulty)}</div><p class="statement">${q.stem}</p><div class="question-formula">${q.formula}</div><div class="exam-answer"><label for="exam-answer-input">你的答案或解题过程 <span class="muted">（支持输入纯文字、公式源码）</span></label><textarea class="input" id="exam-answer-input" maxlength="100000" oninput="saveExamAnswer('${q.id}',this.value)" placeholder="填写答案或解题过程……">${escapeHTML(ex.answers[q.id]||'')}</textarea><p class="notice" id="exam-save-status" style="margin-top:8px">${storageOK?'本地自动保存已开启':'当前环境无法持久保存，请留意备份'}</p></div><div class="detail-nav"><button class="btn small" onclick="examGo(${ex.index-1})" ${ex.index===0?'disabled':''}>${ic('back')}上一题</button>${ex.index===ex.ids.length-1?`<button class="btn primary small" onclick="askFinishExam()">检查并交卷${ic('check')}</button>`:`<button class="btn primary small" onclick="examGo(${ex.index+1})">下一题${ic('arrow')}</button>`}</div></article></div>`}</div>`;
}
function saveExamAnswer(id,value){S.exam.answers[id]=value;persist();$('#exam-save-status').textContent=storageOK?'已保存到本机':'仅暂存内存，尚未写入本机';$('#exam-answered').textContent=`已填写 ${S.exam.ids.filter(id=>S.exam.answers[id]?.trim()).length} / ${S.exam.ids.length}`;const btns=document.querySelectorAll('.question-numbers button');btns.forEach((b,i)=>b.classList.toggle('answered',!!S.exam.answers[S.exam.ids[i]]?.trim()))}
function examGo(i){if(!S.exam||i<0||i>=S.exam.ids.length)return;S.exam.index=i;persist();renderActiveExam()}
function togglePause(){const ex=S.exam;if(ex.paused){ex.deadline=Date.now()+ex.remaining*1000;ex.paused=false}else{ex.remaining=remaining(ex);ex.paused=true}persist();renderActiveExam()}
function askFinishExam(){const ex=S.exam,unanswered=ex.ids.filter(id=>!ex.answers[id]?.trim()).length;modal('结束这次练习？',`<p>本次共 ${ex.ids.length} 道题，${unanswered?`还有 <strong class="purple">${unanswered}</strong> 道未填写。`:'你已经填写了全部题目。'}</p><p class="notice mt">交卷后将显示参考答案，并进入逐题自评。未填写题目暂记 0 分；无法匹配的答案会等待你的判断。</p><div class="dialog-actions"><button class="btn small" onclick="closeModal()">再检查一下</button><button class="btn primary small" onclick="closeModal();finishExam(false)">确认交卷</button></div>`)}
function normalizeAnswer(s){return String(s).toLowerCase().replace(/\\(?:dfrac|tfrac|frac)\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g,'$1/$2').replace(/\\pi|π/g,'pi').replace(/\\cos/g,'cos').replace(/−|–/g,'-').replace(/²/g,'^2').replace(/[\s$(){}*\\]/g,'').replace(/[。．]$/,'')}
function finishExam(auto){const ex=S.exam;if(!ex||ex.status!=='active')return;ex.remaining=remaining(ex);ex.finished=Date.now();ex.status='finished';ex.paused=false;ex.grades={};ex.matched=[];ex.ids.forEach(id=>{const q=getQ(id),a=ex.answers[id]?.trim()||'';if(!a)ex.grades[id]=0;else if(q.accepted.some(v=>normalizeAnswer(v)===normalizeAnswer(a))){ex.grades[id]=q.points;ex.matched.push(id)}else ex.grades[id]=null});syncReport();if(auto){closeModal();toast('时间已到，作答已保存并交卷')}navigate('exam')}
function gradeSummary(ex){const total=ex.ids.reduce((s,id)=>s+getQ(id).points,0);let score=0,pending=0;ex.ids.forEach(id=>{const g=ex.grades[id];if(g===null||g===undefined)pending++;else score+=g});return {total,score,pending}}
function renderExamReport(){const ex=S.exam,g=gradeSummary(ex);$('#app').innerHTML=`<div class="page">${header('','成绩与复盘',ex.name,`<button class="btn small" onclick="newExam()">重新组题${ic('arrow')}</button>`)}<div class="card report-summary"><div class="report-score"><strong id="report-total">${g.score}</strong><small>/ ${g.total} 分 · 记录分数</small></div><div><h2 style="font-size:21px">本次作答</h2><p class="muted" style="font-size:12px;margin-top:8px">${ex.ids.length} 道题 · 已使用 ${Math.max(0,Math.ceil((ex.duration-ex.remaining)/60))} 分钟 · <span id="report-pending">${g.pending} 道待自评</span></p><p class="notice" style="margin-top:8px">这里不是官方阅卷。常见填空写法仅作文本匹配，其余请按参考过程自评；未确认的题目不算错。</p></div></div><div class="callout warm mb" style="font-size:11px">${ic('info')} 证明题与复杂表达式不会自动评分。你可以查看参考解析，再填写 0 至该题满分之间的整数。模考自评分不混入刷题独立正确率。</div>
 ${ex.ids.map((id,i)=>{const q=getQ(id),score=ex.grades[id],matched=ex.matched.includes(id);return `<section class="card grading-card"><div class="row between wrap"><h3 style="font-size:14px">${i+1}. ${q.title}</h3><span class="chip ${matched?'green':score===null?'amber':''}">${matched?'常见写法匹配':score===null?'等待自评':ex.answers[id]?.trim()?'已填写自评分':'未作答，暂记 0 分'}</span></div><p class="notice" style="margin-top:5px">第 ${q.edition} 届 · ${q.number} · ${q.points} 分</p><div class="answer-compare"><div><span class="notice">你的作答</span><p class="your-answer">${escapeHTML(ex.answers[id]||'本题未填写')}</p></div><div><span class="notice">参考答案</span>${q.answer}</div></div><div class="grade-row"><button class="text-btn" onclick="showExamSolution('${id}')">${ic('book')}查看参考过程</button><div class="row"><span>自评分</span><input aria-label="第 ${i+1} 题自评分" type="number" min="0" max="${q.points}" step="1" class="input score-input" value="${score===null||score===undefined?'':score}" placeholder="待评" onchange="setGrade('${id}',this)"><span>/ ${q.points}</span><button class="btn small ghost" onclick="addWrong('${id}')">${ic('pen')}记错题</button></div></div></section>`}).join('')}
 <section class="card pad"><div class="row between wrap"><div><h3 style="font-size:15px">保存复盘</h3><p class="notice" style="margin-top:6px">保存已评分题目的复盘记录，低于满分的题目加入错题本。待自评题目保持待定。</p></div><button class="btn primary" onclick="saveExamReview()">${ic('check')}${ex.saved?'更新复盘记录':'保存本次复盘'}</button></div></section></div>`}
function setGrade(id,input){const raw=input.value.trim();if(raw===''){S.exam.grades[id]=null}else{let n=Number(raw);if(!Number.isFinite(n)){input.value='';return}n=Math.max(0,Math.min(getQ(id).points,Math.round(n)));S.exam.grades[id]=n;input.value=n}S.exam.saved=false;syncReport();const g=gradeSummary(S.exam);$('#report-total').textContent=g.score;$('#report-pending').textContent=g.pending+' 道待自评'}
function showExamSolution(id){const q=getQ(id);modal(q.title,`<span class="chip purple">第 ${q.edition} 届 · ${q.number} · 参考方法分步整理</span>${q.steps.map((s,i)=>`<div style="margin-top:21px"><h3>${i+1}. ${s.title}</h3><div style="font-size:12px">${s.body}</div></div>`).join('')}<div class="callout neutral mt">${q.method}</div>`)}
function saveExamReview(){const ex=S.exam;ex.ids.forEach(id=>{const g=ex.grades[id];const logId=`${ex.id}:${id}`;S.logs=S.logs.filter(l=>l.id!==logId);if(g===null||g===undefined)return;S.logs.push({id:logId,qid:id,time:ex.finished,date:day(new Date(ex.finished)),result:g===getQ(id).points?'assisted':'wrong',assistance:true,source:'exam'});if(g<getQ(id).points&&!S.wrong[id])S.wrong[id]={reason:'方法不会',created:day(),due:dayPlus(1),stage:0}});ex.saved=true;syncReport();renderExamReport();toast('本次复盘已保存，待自评题目仍保持待定')}
function newExam(){const g=gradeSummary(S.exam);if(!S.exam.saved&&g.pending){modal('保留这份记录，开始新练习？',`<p>还有 ${g.pending} 道题未自评。当前作答与已填写分数会留在本地历史中，不会丢弃。</p><div class="dialog-actions"><button class="btn small" onclick="closeModal()">继续复盘</button><button class="btn primary small" onclick="syncReport();S.exam=null;persist();closeModal();renderExamConfig()">开始新练习</button></div>`)}else{syncReport();S.exam=null;persist();renderExamConfig()}}
function reviewRow(id,w){const q=getQ(id);return `<div class="review-list-row"><span class="stat-icon" style="width:32px;height:32px;border-radius:9px">${ic('refresh')}</span><div class="grow"><h4>${q.title}</h4><p>第 ${q.edition} 届 · ${q.number} · ${w.reason} · ${w.due<=day()?'已到复习时间':w.due+' 复习'}</p></div><button class="btn soft small" onclick="restartProblem('${id}')">重做${ic('arrow')}</button></div>`}
function heatmap(){const end=new Date(),start=new Date();start.setDate(end.getDate()-97);const counts={};S.logs.forEach(l=>counts[l.date]=(counts[l.date]||0)+1);let html='';for(let i=0;i<98;i++){const d=new Date(start);d.setDate(start.getDate()+i);const key=day(d),n=counts[key]||0;html+=`<span class="heat-cell ${n?'l'+Math.min(4,n):''} ${key===day()?'today':''}" title="${key}：${n} 次记录" aria-label="${key} ${n} 次记录"></span>`}return `<div class="heatmap-container"><div class="heatmap">${html}</div></div><div class="heat-key">少 <i style="background:var(--line)"></i><i style="background:#d3c9f3"></i><i style="background:#af99e7"></i><i style="background:#8367d4"></i><i style="background:#6144bf"></i> 多</div>`}
function learningList(){
 if(learnTab==='sessions'){const rows=[...(X.session?[X.session]:[]),...[...X.history].reverse().filter(s=>s.id!==X.session?.id)];return rows.map(trainingSummary).join('')||'<p class="cmc-quiet-empty">没有历史训练</p>'}
 if(learnTab==='papers'){
  const ids=Object.keys(archiveNotes).filter(id=>{const n=archiveNotes[id];return n&&(n.text?.trim()||n.done||n.review)&&archGet(id)}).sort((a,b)=>(archiveNotes[b].time||0)-(archiveNotes[a].time||0));
  if(!ids.length)return `<div class="card">${empty('暂无原卷记录','在原卷阅读页写笔记或标记完成。','打开原卷馆','archive','files')}</div>`;
  return ids.map((id,i)=>{const a=archGet(id),n=archiveNotes[id];return `<article class="card learn-item"><span class="item-number">${String(i+1).padStart(2,'0')}</span><div class="grow"><h3>${archEsc(a.title)}</h3><p class="meta">${a.year} · 第 ${a.edition} 届 · ${a.group} · ${a.stage}</p><div class="row wrap" style="margin-top:8px">${n.done?'<span class="chip green">已练习</span>':''}${n.review?'<span class="chip amber">待复习</span>':''}</div>${n.text?.trim()?`<p class="note-preview">${archEsc(n.text.slice(0,180))}</p>`:''}</div><a href="#archive/${encodeURIComponent(id)}" class="btn soft small">查看原卷${ic('arrow')}</a></article>`}).join('');
 }

 if(learnTab==='reports'){return S.reports.length?[...S.reports].reverse().map(r=>{const g=gradeSummary(r);return `<article class="card learn-item"><span class="stat-icon cream">${ic('clock')}</span><div class="grow"><h3>${escapeHTML(r.name)}</h3><p class="meta">${day(new Date(r.finished))} · ${r.ids.length} 题 · 已记录 ${g.score}/${g.total} 分 · ${g.pending} 道待自评</p><span class="chip amber">自评记录，非官方得分</span></div><button class="btn soft small" onclick="openReport('${r.id}')">查看复盘</button></article>`}).join(''):`<div class="card">${empty('还没有模考记录','先做一组限时练习，再回来看看。','开始一场小测验','exam','clock')}</div>`}
 let ids=learnTab==='wrong'?Object.keys(S.wrong):learnTab==='fav'?S.fav:learnTab==='notes'?Object.keys(S.notes).filter(id=>S.notes[id]?.trim()):Object.keys(S.wrong).sort((a,b)=>S.wrong[a].due.localeCompare(S.wrong[b].due));
 ids=ids.filter(id=>QIDS.has(id));
 if(!ids.length){const texts={wrong:['暂无错题','遇到卡住的题，点击“加入错题本”，这里会记住它。'],fav:['暂无收藏','收藏按钮在题目详情页；精彩的方法和解法都可以留下。'],notes:['暂无笔记','在题目详情中打开“我的笔记”，写下推导、错因或下次的提醒。'],review:['暂无复习任务','先把有卡点的题加入错题本，再通过重做推进复习间隔。']};return `<div class="card">${empty(...texts[learnTab],'去真题库','bank',learnTab==='notes'?'pen':'bookmark')}</div>`}
 return ids.map((id,i)=>{const q=getQ(id),w=S.wrong[id],note=S.notes[id]?.trim();return `<article class="card learn-item"><span class="item-number">${String(i+1).padStart(2,'0')}</span><div class="grow"><h3>${q.title}</h3><p class="meta">第 ${q.edition} 届 · ${q.year} · ${q.number} · ${q.type} · ${q.points} 分</p>${learnTab==='notes'?`<p class="note-preview">${escapeHTML(note)}</p>`:`<div class="row wrap">${w?`<span class="chip red">${w.reason}</span><span class="chip ${w.due<=day()?'amber':''}">${w.due<=day()?'待复习':w.due+' 复习'} · 阶段 ${w.stage}/6</span>`:topicChips(q)}</div>`}</div><div class="stack" style="gap:6px"><button class="btn soft small" onclick="${learnTab==='notes'?`openNote('${id}')`:`restartProblem('${id}')`}">${learnTab==='notes'?'查看笔记':'重新练习'}${ic('arrow')}</button>${w&&learnTab==='wrong'?`<button class="text-btn muted" style="justify-content:center;font-size:10px" onclick="addWrong('${id}')">修改错因</button>`:''}</div></article>`}).join('')
}
function openNote(id){view={id,steps:0,answer:false,hint:false,assisted:false,tab:'notes',token:String(Date.now())};navigate('question/'+id)}
function openReport(id){const r=S.reports.find(r=>r.id===id);if(!r)return;if(S.exam?.status==='active')return toast('还有一场练习正在进行，请先完成它再查看历史复盘');S.exam=JSON.parse(JSON.stringify(r));persist();navigate('exam')}
function exportData(){
 const backup={format:'cmc-study-backup-v3',exportedAt:new Date().toISOString(),study:S,archiveNotes,enhancements:X,corpusRecords:cmcRecords,cmcTags:cmcTagOverrides,cmcDrill:cmcDrillSession,cmcCheckins};
 const blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download=`CMC学习记录-${day()}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);toast('备份已导出');
}

function askImport(){closeModal();$('#import-file').value='';$('#import-file').click()}
let imported=null, importedArchiveNotes=null, importedPlus=null, importedCorpus=null, importedTags=null, importedDrill=null, importedDrillPresent=false, importedCheckins=null;
function validateArchiveNotes(raw){
 const safe={};if(!raw||typeof raw!=='object'||Array.isArray(raw))return safe;
 const ids=new Set(archAll().map(a=>a.id));
 for(const [id,n] of Object.entries(raw)){
  if(!ids.has(id)||!n||typeof n!=='object'||Array.isArray(n))continue;
  safe[id]={text:typeof n.text==='string'?n.text.slice(0,100000):'',time:Number(n.time)||0,done:!!n.done,review:!!n.review};
 }
 return safe;
}
$('#import-file').addEventListener('change',async e=>{
 const file=e.target.files?.[0];if(!file)return;if(file.size>15*1024*1024)return toast('请选择小于 15 MB 的 JSON 文件');
 try{
  const raw=JSON.parse(await file.text());
  const structured=['cmc-study-backup-v2','cmc-study-backup-v3'].includes(raw?.format);
  importedCheckins=Object.prototype.hasOwnProperty.call(raw,'cmcCheckins')?cmcCleanCheckins(raw.cmcCheckins):null;
  if(Object.prototype.hasOwnProperty.call(raw,'cmcCheckins')&&!Array.isArray(raw.cmcCheckins))throw Error('打卡记录格式无效');
  imported=validate(structured?raw.study:raw);
  importedArchiveNotes=validateArchiveNotes(structured?raw.archiveNotes:archiveNotes);
  importedPlus=raw?.format==='cmc-study-backup-v3'?validatePlus(raw.enhancements):X;
  importedCorpus=cmcValidateRecords(raw.corpusRecords||cmcRecords);
  importedTags=cmcSafeTags(raw.cmcTags||cmcTagOverrides);importedDrillPresent=Object.prototype.hasOwnProperty.call(raw,'cmcDrill');importedDrill=importedDrillPresent?cmcDrillSafe(raw.cmcDrill):null;
  modal('导入学习记录',`<p>${importedCheckins?`学习打卡 ${importedCheckins.length} 次 · `:''}逐题收藏 ${imported.fav.length} · 错题 ${Object.keys(imported.wrong).length} · 逐题笔记 ${Object.values(imported.notes).filter(v=>v.trim()).length} · 原卷记录 ${Object.keys(importedArchiveNotes).length}</p><p class="notice mt">导入将替换备份所包含的记录。旧版备份不含训练与卡片数据，这部分将保留。</p><div class="dialog-actions"><button class="btn small" onclick="exportData()">先导出当前记录</button><button class="btn primary small" onclick="confirmImport()">确认导入</button></div>`);
 }catch(err){imported=null;importedArchiveNotes=null;importedPlus=null;importedCorpus=null;importedTags=null;importedDrill=null;importedDrillPresent=false;importedCheckins=null;toast('备份格式无法识别')}
});
function confirmImport(){
 if(!imported)return;
 if(importedCheckins!==null&&!cmcStoreCheckins(importedCheckins))return;
 importedCheckins=null;
 S=imported;archiveNotes=importedArchiveNotes||{};X=importedPlus||X;imported=null;importedArchiveNotes=null;importedPlus=null;cardSession=null;savePlus();
 if(importedCorpus){cmcRecords=importedCorpus;cmcStore();importedCorpus=null;}
 if(importedTags){cmcTagOverrides=importedTags;cmcPersistTags();importedTags=null;}
 if(importedDrillPresent){cmcDrillSession=importedDrill;cmcPersistDrill();importedDrill=null;importedDrillPresent=false;}
 persist();archSave();applyTheme();view=null;closeModal();render();toast('导入完成');
}

function showSettings(){
 modal('记录与设置',`<p class="notice">记录保存在当前设备，换设备时可导出备份。</p><div class="settings-backup"><button class="btn primary" onclick="exportData()">${ic('export')}导出记录</button><button class="btn" onclick="askImport()">${ic('import')}导入记录</button></div><div class="divider"></div><div class="row between"><h3>清空学习记录</h3><button class="btn danger small" onclick="confirmResetDialog()">${ic('trash')}清空</button></div>`);
}

function confirmResetDialog(){modal('确认清空记录？',`<p>将清空当前浏览器的全部学习记录，包括训练与卡片。此操作不可撤销。</p><div class="dialog-actions"><button class="btn small" onclick="showSettings()">取消</button><button class="btn small" onclick="exportData()">先备份</button><button class="btn danger small" onclick="resetAll()">确认清空</button></div>`)}

function resetAll(){if(!cmcStoreCheckins([]))return;const theme=S.theme;S=defaults();S.theme=theme;archiveNotes={};archSave();X=plusDefaults();cardSession=null;savePlus();cmcRecords={};cmcStore();cmcTagOverrides={};cmcPersistTags();cmcDrillSession=null;cmcPersistDrill();view=null;persist();closeModal();navigate('home');toast('记录已清空')}

function showAbout(){modal('关于 CMC 数学竞赛',`<p>${cmcCorpusData.questions.length} 道题目 · ${cmcTopics.length} 个知识点分类（含综合分类）</p><p class="notice mt">收录范围为 ${cmcCorpusData.coverage.expected_paper_sets} 套试卷，已完整收录 ${cmcCorpusData.coverage.complete_paper_sets} 套。题目、参考答案和来源公开整理；知识点标签由 AI 辅助归类，遇到疑问可对照题目下方的公开来源。</p><p class="notice mt">学习状态、收藏和打卡只保存在当前浏览器，换设备请先导出记录。本版本不附原卷 PDF 和扫描页，来源链接需联网打开。</p><p class="mt"><a href="https://github.com/lidieburich-sys/cmc-math-bank" target="_blank" rel="noopener">GitHub 题库目录 ↗</a></p><div class="subheading">快捷键</div><p class="notice">⌘ / Ctrl K 搜索 · 方向键切题 · 空格展开解析</p>`)}
window.addEventListener('keydown',e=>{
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch();return}
 if($('#modal').open)return;
 if(e.target.closest('input,textarea,select,button,a,[contenteditable="true"]'))return;
 qaKeydown(e);
});
window.addEventListener('pagehide',()=>persist());
setInterval(()=>{const ex=S.exam;if(!ex||ex.status!=='active'||ex.paused)return;const s=remaining(ex);const el=$('#exam-clock');if(el){el.textContent=formatTime(s);el.classList.toggle('red',s<120)}if(s<=0)finishExam(true)},500);

// Public source index. The Pages release ships typeset questions and answers; source attachments remain external.
const ARCHIVE_LOCAL=JSON.parse(document.querySelector('#archive-local-data').textContent);
const ARCHIVE_MAX_YEAR=Math.max(2026,...ARCHIVE_LOCAL.map(p=>p.year));
const ARCHIVE_FALLBACK=JSON.parse(document.querySelector('#archive-remote-data').textContent);
const ARCHIVE_OFFICIAL=JSON.parse(document.querySelector('#archive-official-data').textContent);
const ARCHIVE_REPO='IceFerryLing/Math_competition';
let archiveRemote=[...ARCHIVE_FALLBACK],archiveState={year:'all',edition:'all',group:'非数学类',stage:'all',text:'',page:0,view:null,blobUrl:null,busy:false},archiveNotes={};
try{archiveNotes=JSON.parse(localStorage.getItem('cmc-archive-notes-v1')||'{}')}catch(e){archiveNotes={}}
function archSave(){try{localStorage.setItem('cmc-archive-notes-v1',JSON.stringify(archiveNotes))}catch(e){console.warn('Archive save blocked',e)}}
function archEsc(s){return escapeHTML(String(s||''))}
function archGroup(g){return g.includes('非数学')?'非数学类':g.includes('数学')?'数学类':'其他'}
function archMeta(item){return `第 ${item.edition} 届 · ${item.year} 年 · ${item.stage} · ${item.group}`}
function archLocalMatches(entry){return ARCHIVE_LOCAL.filter(p=>p.edition===entry.edition&&p.stage===entry.stage&&(p.group===entry.group||['数学类','非数学类'].includes(entry.group)&&archGroup(p.group)===entry.group))}
function archAll(){const items=[...ARCHIVE_LOCAL,...ARCHIVE_FALLBACK,...ARCHIVE_OFFICIAL];const keys=new Set();return items.filter(a=>{const key=archLink(a)||a.id;if(keys.has(key))return false;keys.add(key);return a.year>=2009&&a.year<=ARCHIVE_MAX_YEAR}).sort((a,b)=>b.year-a.year||b.edition-a.edition||a.stage.localeCompare(b.stage,'zh')||a.group.localeCompare(b.group,'zh')||a.title.localeCompare(b.title,'zh'))}
function archParsed(path,sha,size){
 const fname=path.split('/').pop(),n=Number(path.match(/第(\d+)届全国大学生数学竞赛赛题/)?.[1]||0);
 if(!n||!fname.toLowerCase().endsWith('.pdf')||/参赛指南/.test(fname))return null;
 const stage=fname.includes('决赛')?'决赛':fname.includes('补赛')?'补赛':'初赛';
 const m=fname.match(/[（(](20\d\d)年[）)]/);
 const year=m?Number(m[1]):n+2008+(stage==='决赛'?1:0);
 if(year<2009||year>ARCHIVE_MAX_YEAR)return null;
 let group='其他';if(fname.includes('非数学'))group=fname.match(/非数学[AB]类/)?.[0]||'非数学类';else if(fname.includes('数学类低年级'))group='数学类低年级组';else if(fname.includes('数学类高年级'))group='数学类高年级组';else if(fname.includes('数学A类'))group='数学A类';else if(fname.includes('数学B类'))group='数学B类';else if(fname.includes('数学类'))group='数学类';
 return {id:'ghsha-'+sha,year,edition:n,stage,group,title:fname.replace(/\.pdf$/i,''),source:'github',path,size};
}
async function archSync(){try{const r=await fetch('https://api.github.com/repos/'+ARCHIVE_REPO+'/git/trees/master?recursive=1',{headers:{Accept:'application/vnd.github+json'}});if(!r.ok)throw Error('HTTP '+r.status);const j=await r.json();const items=(j.tree||[]).filter(x=>x.type==='blob'&&x.path.includes('【往届真题】')).map(x=>archParsed(x.path,x.sha,x.size)).filter(Boolean);if(items.length>65){archiveRemote=[...ARCHIVE_FALLBACK,...items];try{localStorage.setItem('cmc-archive-index-v1',JSON.stringify(items))}catch(e){} if(route().path==='archive')renderArchive();}}catch(e){console.info('Using bundled verified paper index; live sync unavailable',e)}}
try{const cached=JSON.parse(localStorage.getItem('cmc-archive-index-v1')||'null');if(Array.isArray(cached)&&cached.length>65)archiveRemote=[...ARCHIVE_FALLBACK,...cached]}catch(e){}
function archLink(a){if(!a)return '';if(a.source_url||a.url)return a.source_url||a.url;if(a.source==='github'&&a.path)return 'https://github.com/'+ARCHIVE_REPO+'/blob/master/'+a.path.split('/').map(encodeURIComponent).join('/');return ''}
function cmcPublicSourceLink(paper,label='原卷来源（联网）'){const url=paper?.source_url||archLink(paper);return url?`<a class="cmc-paper-source" href="${escapeHTML(url)}" target="_blank" rel="noopener">${label} ↗</a>`:'<span class="cmc-caption">公开来源待补充</span>'}
function archRaw(a){return 'https://raw.githubusercontent.com/'+ARCHIVE_REPO+'/master/'+a.path.split('/').map(encodeURIComponent).join('/')}
function archPickYear(year){archiveState.year=String(year);archiveState.edition='all';archiveState.page=0;renderArchive()}
function archPickEdition(edition,group='all'){archiveState.edition=String(edition);archiveState.year='all';archiveState.stage='all';archiveState.group=group;archiveState.text='';archiveState.page=0;archiveSourceFilter='all';location.hash='#archive';renderArchive();window.scrollTo({top:0,behavior:'smooth'})}
function archPickField(field,value){archiveState[field]=value;renderArchive()}
function renderArchive(){
 const r=route();if(r.path.startsWith('archive/'))return renderArchivePaper(r.path.slice(8));
 const isFirst=archiveState.edition==='1';
 $('#app').innerHTML=`<div class="page refined-archive">${header('',isFirst?'第一届公开来源':'历届公开来源','题目与参考答案已收录；原卷在来源网站联网查看。',`<span class="chip">${archAll().length} 条来源</span>`)}
 <section class="card archive-toolbar"><div class="archive-years"><button class="${archiveState.year==='all'?'active':''}" onclick="archPickYear('all')">全部年份</button>${[...new Set(ARCHIVE_LOCAL.map(p=>p.year))].sort((a,b)=>b-a).map(y=>`<button class="${archiveState.year===String(y)?'active':''}" onclick="archPickYear(${y})">${y}</button>`).join('')}</div>
 <div class="archive-filters"><select class="input" onchange="archPickField('group',this.value)" aria-label="比赛类别">${[['非数学类','非数学类'],['数学类','数学类'],['all','全部类别']].map(([v,t])=>`<option value="${v}" ${archiveState.group===v?'selected':''}>${t}</option>`).join('')}</select><select class="input" onchange="archPickField('stage',this.value)" aria-label="初赛决赛">${[['all','所有阶段'],['初赛','初赛'],['决赛','决赛'],['补赛','补赛']].map(([v,t])=>`<option value="${v}" ${archiveState.stage===v?'selected':''}>${t}</option>`).join('')}</select><input class="input" aria-label="搜索试卷" value="${archEsc(archiveState.text)}" placeholder="搜索试卷" oninput="archiveState.text=this.value;archRerenderResults()"/></div></section>
 ${isFirst?`<div class="archive-first-status">第一届 · <button class="archive-first-clear" onclick="archPickEdition('all')">查看全部</button></div>`:''}<div id="archive-list-results"></div></div>`;archRerenderResults();
}
let archiveSourceFilter='all';function archShowSource(v){archiveSourceFilter=v;archRerenderResults()}
function archRerenderResults(){const el=$('#archive-list-results');if(!el)return;const list=archAll().filter(a=>(archiveState.edition==='all'||String(a.edition)===archiveState.edition)&&(archiveState.year==='all'||String(a.year)===archiveState.year)&&(archiveState.group==='all'||archGroup(a.group)===archGroup(archiveState.group))&&(archiveState.stage==='all'||a.stage===archiveState.stage)&&(!archiveState.text||(a.title+' '+a.year+' '+a.group+' '+a.stage).toLowerCase().includes(archiveState.text.trim().toLowerCase())));
 el.innerHTML=`<div class="archive-stat"><strong>${list.length}</strong> 条匹配来源 · 联网查看</div>`+(list.length?`<div class="archive-result">${list.map(a=>`<article class="card archive-paper"><div class="row between wrap"><span class="chip">公开来源</span><span class="small-meta">${a.year} · 第${a.edition}届</span></div><h3>${archEsc(a.title)}</h3><p>${a.stage} · ${a.group}</p><div class="paper-actions"><a href="${archEsc(archLink(a))}" target="_blank" rel="noopener" class="btn primary small">查看来源（联网） ${ic('arrow')}</a><a href="#archive/${encodeURIComponent(a.id)}" class="btn small">来源与笔记</a></div></article>`).join('')}</div>`:`<section class="card">${empty('筛选后没有资料','尝试选择“全部年份”或“全部阶段”。','','archive','search')}</section>`);
}
function archGet(id){return ARCHIVE_LOCAL.find(a=>a.id===id||a.aliases?.includes(id))||ARCHIVE_FALLBACK.find(a=>a.id===id)||ARCHIVE_OFFICIAL.find(a=>a.id===id)}
let archivePDFUrl=null;
function archRevoke(){if(archivePDFUrl){try{URL.revokeObjectURL(archivePDFUrl)}catch(e){}archivePDFUrl=null}}
function renderArchivePaper(id){const a=archGet(decodeURIComponent(id));if(!a){$('#app').innerHTML=`<div class="page card pad">找不到此来源。<a href="#archive">返回来源目录</a></div>`;return}archiveState.view=a.id;const note=archiveNotes[a.id]||{},questions=cmcCorpusData.questions.filter(q=>q.paper===(a.corpus_id||a.id));
 $('#app').innerHTML=`<div class="page"><div class="archive-crumb"><a href="#papers">${ic('back')}返回整卷训练</a><span>/</span><span>${archMeta(a)}</span></div>${header('',archEsc(a.title),'公开来源需联网打开；本页笔记仅保存在当前浏览器。')}
 <div class="archive-source-row">${cmcPublicSourceLink(a,'查看原卷公开来源（联网）')}</div><div class="archive-reader"><section class="card pad"><h2>题目与参考答案</h2><p class="notice mt">本版本提供排版题目与答案，未附原卷 PDF 和扫描页。核对原卷时，请打开上方公开来源。</p>${questions.length?`<p class="mt">已收录 ${questions.length} 道题目。</p><a href="#${archEsc(practiceListRoute('corpus',{paper:a.corpus_id||a.id}))}" class="btn primary small mt">练这套题 ${ic('arrow')}</a>`:'<p class="notice mt">这条资料是补充参考来源。</p>'}</section>
 <aside class="archive-sidebar"><section class="card"><h3>${ic('pen')} 我的原卷笔记</h3><textarea id="archive-note" class="input" style="margin-top:12px" placeholder="记录阅读原卷时的思路或疑问……" oninput="archNote('${a.id}',this.value)">${archEsc(note.text||'')}</textarea><p class="notice" style="margin-top:6px" id="archive-save-label">${note.text?'已读取保存的笔记':'尚未写笔记'}</p></section><section class="card"><h3>${ic('checkCircle')} 我的进度</h3><div class="row wrap" id="archive-progress-actions"><button class="btn small ${note.done?'soft':''}" onclick="archMark('${a.id}','done')">${ic('check')} ${note.done?'已标记练习':'标记已练习'}</button><button class="btn small ${note.review?'soft':''}" onclick="archMark('${a.id}','review')">${ic('bookmark')} ${note.review?'待复习 ✓':'加入待复习'}</button></div></section></aside></div></div>`;
}
function archStepPage(){toast('原卷页请在公开来源网站查看')}
function archNote(id,t){const a=archiveNotes[id]||{};a.text=t;a.time=Date.now();archiveNotes[id]=a;archSave();const s=$('#archive-save-label');if(s)s.textContent='正在本机保存 · '+new Date().toLocaleTimeString()}
function archMark(id,k){
 const n=archiveNotes[id]||{};n[k]=!n[k];archiveNotes[id]=n;archSave();
 const el=$('#archive-progress-actions');if(el)el.innerHTML=`<button class="btn small ${n.done?'soft':''}" onclick="archMark('${id}','done')">${ic('check')} ${n.done?'已练习':'标记已练习'}</button><button class="btn small ${n.review?'soft':''}" onclick="archMark('${id}','review')">${ic('bookmark')} ${n.review?'已加入复习':'加入待复习'}</button>`;
 toast('已保存');
}

function archDownload(id){const url=archLink(archGet(id));if(url)window.open(url,'_blank','noopener')}
function archLoadPDF(id){archDownload(id)}
// Source attachments stay on their original public sites.
/* One quiet, warm-white reading surface. */
function applyDesignStyle(){document.documentElement.dataset.design='claude';const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute('content','#faf9f6')}

function startApp(){applyTheme();applyDesignStyle();hydrate();$('#storage-warning').classList.toggle('hidden',storageOK&&plusStorageOK);render();}


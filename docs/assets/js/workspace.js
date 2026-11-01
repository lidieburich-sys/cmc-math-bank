/* Study workspace: shared records, topic progress and focused practice. */
'use strict';
let cmcRecordPage=0;
let corpusStorageOK=true;
function cmcEntries(){
 // Canonical question IDs join old text lessons, corpus records and check-ins.
 // Read old stores without deleting or rewriting the user's original history.
 const merged=new Map();
 const entry=id=>{
  const qid=cmcCheckinId(id)||id;if(merged.has(qid))return merged.get(qid);
  const q=cmcQmap[qid],text=q?null:getQ(qid);if(!q&&!text)return null;
  const row={id:qid,title:q?q.title:text.title,href:(q?'corpus/':'question/')+qid,status:'new',statusAt:0,star:false,starAt:0,note:'',notes:[],time:0,viewed:0,checkedAt:0,source:q?'corpus':'text',meta:q?cmcMeta(q).topics.map(cmcTopicName).join(' · '):text.topics.map(id=>getK(id).name).join(' · ')};
  merged.set(qid,row);return row;
 };
 const add=(id,data)=>{
  const row=entry(id);if(!row)return;
  const at=data.statusAt||0;
  if((data.status!=='new'||data.explicitStatus)&&at>=row.statusAt){row.status=data.status;row.statusAt=at}
  if(data.starAt&&data.starAt>=row.starAt){row.star=!!data.star;row.starAt=data.starAt}
  else if(!row.starAt)row.star=row.star||!!data.star;
  if(data.note?.trim()&&!row.notes.includes(data.note))row.notes.push(data.note);
  row.time=Math.max(row.time,data.time||0);row.viewed=Math.max(row.viewed,data.viewed||0);
 };
 for(const q of Q){const log=latest(q.id),note=S.notes[q.id]||'';if(!log&&!S.wrong[q.id]&&!S.fav.includes(q.id)&&!note&&!S.viewed[q.id])continue;
  add(q.id,{status:S.wrong[q.id]?'wrong':log?.result==='independent'?'correct':log?'wrong':'new',statusAt:log?.time||0,star:S.fav.includes(q.id),note,time:Math.max(log?.time||0,S.viewed[q.id]||0),viewed:S.viewed[q.id]||0});
 }
 for(const [id,r] of Object.entries(cmcRecords)){if(!cmcQmap[id])continue;add(id,{status:r.status,statusAt:r.statusUpdated||r.updated||0,explicitStatus:!!r.statusUpdated,star:r.star,starAt:r.starUpdated||0,note:r.answer||'',time:Math.max(r.updated||0,r.viewed||0),viewed:r.viewed||0})}
 for(const checkin of cmcCheckins){const row=entry(checkin.qid);if(!row)continue;if(checkin.time>=row.checkedAt){row.checkedAt=checkin.time;row.date=checkin.date}row.time=Math.max(row.time,checkin.time)}
 return [...merged.values()].map(row=>({...row,note:row.notes.join('\n\n')})).sort((a,b)=>b.time-a.time);
}
function cmcStudyStats(){const rows=cmcEntries();return {rows,done:new Set(rows.filter(r=>r.status!=='new'||r.checkedAt).map(r=>cmcCheckinId(r.id)||r.id)).size,correct:rows.filter(r=>r.status==='correct').length,wrong:rows.filter(r=>r.status==='wrong').length,star:rows.filter(r=>r.star).length,notes:rows.filter(r=>r.note.trim()).length}}
function cmcTopicProgressHTML(id){const qs=cmcDrillPool(cmcCorpusData.questions.filter(q=>cmcMeta(q).topics.includes(id))),done=qs.filter(q=>cmcCheckins.some(r=>r.qid===cmcCheckinId(q.id))).length;return `<div class="cmc-topic-progress"><i><b style="width:${qs.length?Math.round(done/qs.length*100):0}%"></b></i><span>已学完 ${done} / ${qs.length}</span></div>`}
function cmcHasResume(){return !!cmcDrillSession?.ids.some(id=>!cmcDrillAnswered(cmcDrillSession,id))}
function cmcResume(){if(!cmcHasResume())return navigate('topics');const s=cmcDrillSession;if(cmcDrillAnswered(s,s.ids[s.index])){let next=s.ids.findIndex((id,i)=>i>s.index&&!cmcDrillAnswered(s,id));if(next<0)next=s.ids.findIndex(id=>!cmcDrillAnswered(s,id));s.index=next}cmcPersistDrill();navigate('drill')}
function cmcQuickPractice(){Object.assign(cmcFilter,{paper:'all',text:'',edition:'all',group:'nonmath',stage:'初赛',kind:'all',method:'all',topic:'all',tagStatus:'all',quality:'ready',tab:'all',page:0});cmcStartDrill(5)}
function cmcReviewWrong(){
 const wrong=cmcEntries().filter(r=>r.status==='wrong');
 const ids=cmcDrillPool(wrong.filter(r=>r.source==='corpus').map(r=>cmcQmap[r.id])).map(q=>q.id);
 if(!ids.length){if(wrong[0])navigate(wrong[0].href);else toast('暂无错题');return}
 cmcDrillSession={ids,index:0,created:Date.now(),label:'错题重练',kind:'all',topic:'all',ratings:{},viewed:{}};cmcPersistDrill();navigate('drill');
}
function cmcDailyQuestion(date=new Date()){const serial=Math.floor(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())/86400000);return Q[((serial%Q.length)+Q.length)%Q.length]}
function cmcEntryHTML(r,i=0){return `<a class="cmc-record-row" href="#${r.href}?from=learning"><span class="cmc-row-index">${String(i+1).padStart(2,'0')}</span><span class="cmc-record-main"><strong>${cmcEscape(r.title)}</strong><small>${cmcEscape(r.meta)}</small>${r.checkedAt?`<time class="cmc-checkin-time" datetime="${new Date(r.checkedAt).toISOString()}">${cmcCheckinTime({time:r.checkedAt,date:r.date})} · 已打卡</time>`:''}${learnTab==='notes'&&r.note.trim()?`<span class="cmc-note-preview">${cmcEscape(r.note.slice(0,140))}</span>`:''}</span><span class="cmc-record-status ${r.checkedAt&&r.status==='new'?'checked':r.status}">${r.status==='wrong'?'待重练':r.status==='correct'?'已掌握':r.checkedAt?'已学完':r.star?'已收藏':r.note.trim()?'有笔记':'已看答案'}</span>${ic('chevron')}</a>`}
function renderHome(){cmcRenderTopics()}
function renderLearning(){
 const st=cmcStudyStats(),checkins=cmcCheckinSummary(),tabs=[['checkins','学习打卡',checkins.times],['all','全部',st.rows.length],['correct','已掌握',st.correct],['wrong','待重练',st.wrong],['fav','收藏',st.star],...(st.notes?[['notes','笔记',st.notes]]:[])];
 if(learnTab==='review')learnTab='wrong';
 const list=learnTab==='checkins'?[...cmcCheckins].reverse().map(cmcCheckinEntry):st.rows.filter(r=>learnTab==='correct'?r.status==='correct':learnTab==='wrong'?r.status==='wrong':learnTab==='fav'?r.star:learnTab==='notes'?r.note.trim():true);
 const metrics=learnTab==='checkins'?[[checkins.today,'今日学完'],[checkins.total,'累计题数'],[checkins.days,'打卡天数'],[checkins.times,'打卡次数']]:[[checkins.total,'累计学完'],[st.correct,'已掌握'],[st.wrong,'待重练'],[checkins.today,'今日学完']];
 const pages=Math.max(1,Math.ceil(list.length/20));cmcRecordPage=Math.min(cmcRecordPage,pages-1);
 const isLegacy=['papers','reports','sessions'].includes(learnTab);
 $('#app').innerHTML=`<div class="page cmc-records"><div class="cmc-desk-heading"><div><h1>学习状态记录</h1></div><button class="btn small" onclick="exportData()">${ic('export')}导出</button></div><div class="cmc-record-metrics">${metrics.map(([n,t])=>`<div><strong>${n}</strong><span>${t}</span></div>`).join('')}</div><div class="cmc-record-toolbar"><div class="cmc-record-tabs">${tabs.map(([id,name,n])=>`<button class="${learnTab===id?'active':''}" onclick="learnTab='${id}';cmcRecordPage=0;renderLearning()">${name}${n!==''?`<span>${n}</span>`:''}</button>`).join('')}</div>${learnTab==='wrong'&&st.wrong?'<button class="btn primary small" onclick="cmcReviewWrong()">重练错题 →</button>':''}</div><div class="cmc-record-list">${isLegacy?learningList():list.length?list.slice(cmcRecordPage*20,cmcRecordPage*20+20).map((r,i)=>cmcEntryHTML(r,cmcRecordPage*20+i)).join(''):`<div class="cmc-quiet-empty">${learnTab==='checkins'?'学完一题，点“学完打卡”就会记在这里':'这里还没有记录'}<a class="text-btn" href="#topics">去练几题 →</a></div>`}</div>${!isLegacy&&pages>1?`<div class="cmc-record-pagination"><button class="btn small" ${cmcRecordPage===0?'disabled':''} onclick="cmcRecordPage--;renderLearning()">上一页</button><span>${cmcRecordPage+1} / ${pages}</span><button class="btn small" ${cmcRecordPage===pages-1?'disabled':''} onclick="cmcRecordPage++;renderLearning()">下一页</button></div>`:''}${Object.keys(archiveNotes).length||S.reports.length||X.history.length||X.session?`<details class="cmc-legacy-records"><summary>历史记录</summary><div class="row wrap">${Object.keys(archiveNotes).length?'<button class="text-btn" onclick="learnTab=&#39;papers&#39;;renderLearning()">原卷笔记与进度</button>':''}${S.reports.length?'<button class="text-btn" onclick="learnTab=&#39;reports&#39;;renderLearning()">历史模考</button>':''}${X.history.length||X.session?'<button class="text-btn" onclick="learnTab=&#39;sessions&#39;;renderLearning()">历史训练</button>':''}</div>${isLegacy?'<button class="text-btn" onclick="learnTab=&#39;all&#39;;renderLearning()">返回题目记录</button>':''}</details>`:''}<div class="cmc-backup-line"><span>记录保存在当前浏览器</span><button class="text-btn" onclick="askImport()">导入备份</button></div></div>`;
}
function cmcRenderTopics(){
 $('#app').innerHTML=`<div class="page cmc-corpus cmc-topic-hub"><div class="cmc-desk-heading"><div><h1>知识点专项训练</h1></div>${cmcHasResume()?'<button class="btn primary" onclick="cmcResume()">继续训练 →</button>':X.session&&!X.session.finished?'<button class="btn primary" onclick="resumeTraining()">继续训练 →</button>':''}</div>${cmcPublicIntroHTML()}${cmcCatalogHTML()}</div>`;
}
function cmcToggleFocus(){focusMode=!focusMode;document.body.classList.toggle('focus-mode',focusMode);const b=document.getElementById('cmc-focus-toggle');if(b){b.textContent=focusMode?'退出专注':'专注';b.setAttribute('aria-pressed',String(focusMode))}}
function cmcDrillMapHTML(){const s=cmcDrillSession;return `<details class="cmc-question-map"><summary>题目导航 <span>${Object.keys(s.ratings).length} / ${s.ids.length}</span></summary><div>${s.ids.map((id,i)=>`<button class="${i===s.index?'current ':''}${s.ratings[id]||''}" onclick="cmcDrillJump(${i})" aria-label="第 ${i+1} 题，${s.ratings[id]==='correct'?'已掌握':s.ratings[id]==='wrong'?'待重练':'未自评'}" ${i===s.index?'aria-current="step"':''}>${i+1}</button>`).join('')}</div></details>`}
function openSearch(){modal('搜索题目与知识点',`<input id="global-search" class="input search-modal-input" placeholder="知识点、题型、年份…" oninput="searchResults(this.value)" aria-label="全站搜索"><div id="search-results"></div>`);searchResults('');setTimeout(()=>$('#global-search')?.focus(),70)}
function searchResults(text){
 const t=text.trim().toLowerCase();const topics=cmcTopics.filter(k=>k.id!=='other'&&(!t||(k.name+' '+k.desc).toLowerCase().includes(t))).slice(0,5);
 const qs=t?cmcCorpusData.questions.filter(q=>[q.title,q.source_name,q.year,q.kind,q.search_text||'',...cmcMeta(q).topics.map(cmcTopicName)].join(' ').toLowerCase().includes(t)).slice(0,8):[];
 const precise=t?Q.filter(q=>(q.title+' '+q.stem+' '+q.year+' '+q.topics.map(id=>getK(id).name).join(' ')).toLowerCase().includes(t)).slice(0,3):[];
 $('#search-results').innerHTML=`${topics.length?'<div class="subheading">知识点</div>'+topics.map(k=>`<button class="search-hit" onclick="closeModal();cmcGoTopic('${k.id}')"><strong>${cmcEscape(k.name)}</strong><small>${cmcEscape(k.group)}</small></button>`).join(''):''}${qs.length?'<div class="subheading">历届真题</div>'+qs.map(q=>`<button class="search-hit" onclick="closeModal();cmcOpen('${q.id}')"><strong>${cmcEscape(q.title)}</strong><small>${cmcMeta(q).topics.map(cmcTopicName).map(cmcEscape).join(' · ')}</small></button>`).join(''):''}${precise.length?'<div class="subheading">文字精讲</div>'+precise.map(q=>`<button class="search-hit" onclick="closeModal();restartProblem('${q.id}')"><strong>${cmcEscape(q.title)}</strong></button>`).join(''):''}${!topics.length&&!qs.length&&!precise.length?'<div class="cmc-quiet-empty">没有找到，换个关键词试试</div>':''}`;
}

function cmcPublicIntroHTML(){const coverage=cmcCorpusData.coverage;return `<section class="cmc-public-intro" aria-label="题库使用说明"><div class="cmc-public-intro-top"><p><strong>${cmcCorpusData.questions.length}</strong> 道题目 · <strong>${cmcTopics.length}</strong> 个知识点分类（含综合）<br><span>完整收录 ${coverage.complete_paper_sets} 套试卷 / 收录范围 ${coverage.expected_paper_sets} 套</span></p><a class="btn small" href="https://github.com/lidieburich-sys/cmc-math-bank" target="_blank" rel="noopener">GitHub 题库目录 ↗</a></div><p class="cmc-public-help">选择知识点或整卷开始练习，先作答，再展开答案。学完可打卡、标记掌握或收藏；记录只保存在当前浏览器，换设备前请在“学习状态记录”导出备份。</p><div class="cmc-public-links"><a href="#corpus">浏览全部题目 →</a><a href="#archive">原卷公开来源（联网） ↗</a></div></section>`}

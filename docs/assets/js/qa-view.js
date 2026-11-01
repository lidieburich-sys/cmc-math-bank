'use strict';

function qaMathMarkup(html){return html.replace(/<math\b(?=[^>]*\bdisplay=(["'])block\1)[^>]*>[\s\S]*?<\/math>/g,math=>`<span class="math display" tabindex="0" role="group" aria-label="公式">${math}</span>`)}
function qaContent(source,id){
 const typed=window.CMC_QA_LATEX?.[id];if(typed)return {question:qaMathMarkup(typed.question),answer:qaMathMarkup(typed.answer)};
 return {question:'<p>题目暂未载入，请刷新页面重试。</p>',answer:'<p>答案暂未载入，请刷新页面重试。</p>'};
}
function qaNavigation(source,id){
 if(source==='drill'){const s=cmcDrillSession;return {ids:s.ids,index:s.index,label:s.label,returnTo:s.label==='错题重练'?'learning':'topics'}}
 return practiceContext(source,id);
}
function qaAnswerToggled(answer,source,id){if(typeof recordAnswerViewed==='function')recordAnswerViewed(source,id,answer.open)}
function renderMinimalQuestion(source,id){
 const nav=qaNavigation(source,id),content=qaContent(source,id),index=nav.index;
 document.body.classList.add('qa-page-mode');
 const move=delta=>source==='drill'?`cmcDrillJump(${index+delta})`:`practiceMove('${source}','${id}',${delta})`;
 $('#app').innerHTML=`<article class="qa-page">
 <nav class="qa-top" aria-label="题目导航"><a class="qa-back" href="#${escapeHTML(nav.returnTo)}">返回</a><span class="qa-scope">${escapeHTML(nav.label||'')}</span><span class="qa-position" role="group" ${index<0?'':`aria-label="当前第 ${index+1} 题，共 ${nav.ids.length} 题"`}>${index<0?'':`<strong>${index+1}</strong><span aria-hidden="true">/</span>${nav.ids.length}`}</span></nav>
 <div class="qa-sheet">
 <section class="qa-question" aria-labelledby="qa-question-title"><h1 id="qa-question-title">题目</h1><div class="qa-content">${content.question}</div></section>
 <details class="qa-answer" id="qa-answer" ontoggle="qaAnswerToggled(this,'${source}','${id}')"><summary aria-label="答案"><span class="qa-answer-label">答案</span><span class="qa-answer-hint" aria-hidden="true"><span class="qa-when-closed">点击展开解析</span><span class="qa-when-open">收起解析</span></span></summary><div class="qa-content">${content.answer}</div></details>
 </div>
 <div class="qa-source-note">${cmcQuestionSourceHTML(id)}</div>
 <div class="qa-tools">
 <div class="qa-tools-row">
 <section class="qa-state" id="qa-state" data-source="${source}" data-question="${id}" aria-label="题目学习状态">${qaStateControls(source,id)}</section>
 <section class="qa-checkin" id="qa-checkin" data-source="${source}" data-question="${id}" aria-label="学习打卡">${cmcCheckinControls(source,id)}</section>
 </div>
 <nav class="qa-bottom" aria-label="前后题"><button type="button" class="qa-previous" onclick="${move(-1)}" ${index<=0?'disabled':''}>上一题</button><a class="qa-record-link" href="#learning" onclick="learnTab='checkins';cmcRecordPage=0">学习状态记录</a><button type="button" class="qa-next" onclick="${move(1)}" ${index<0||index>=nav.ids.length-1?'disabled':''}>下一题</button></nav>
 </div>
 </article>`;
}
function qaKeydown(e){
 // Keep native controls, text selection and formula scrolling in charge of their keys.
 // In particular, a summary already toggles its details on Space; doing it here too
 // would immediately undo the browser's toggle.
 if(e.defaultPrevented||e.isComposing||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)return;
 if(e.target?.closest?.('input,textarea,select,button,a,summary,[contenteditable="true"],[role="textbox"],.math.display'))return;
 const path=route().path,source=path==='drill'?'drill':path.startsWith('corpus/')?'corpus':path.startsWith('question/')?'text':null;
 if(!source)return;
 if(e.code==='Space'){const answer=document.getElementById('qa-answer');if(answer){e.preventDefault();if(!e.repeat)answer.open=!answer.open}return}
 if(!['ArrowLeft','ArrowRight'].includes(e.key))return;
 e.preventDefault();if(e.repeat)return;const delta=e.key==='ArrowLeft'?-1:1;
 if(source==='drill'){const s=cmcDrillSession;if(s&&s.index+delta>=0&&s.index+delta<s.ids.length)cmcDrillJump(s.index+delta)}
 else practiceMove(source,source==='text'?view.id:cmcDetail.id,delta);
}

// Every practice entrance writes to the same canonical question record.
function qaStudyState(id){return cmcEntries().find(row=>row.id===cmcCheckinId(id))||{status:'new',star:false}}
function qaStateControls(source,id){
 const state=qaStudyState(id),available=!!window.CMC_QA_LATEX?.[id];
 return `<div class="qa-status-options" role="group" aria-label="掌握程度">${[['wrong','待重练'],['correct','已掌握']].map(([status,label])=>`<button type="button" class="qa-status-${status}" aria-pressed="${state.status===status}" onclick="qaSetStatus('${source}','${id}','${status}')" ${available?'':'disabled'}>${label}</button>`).join('')}</div><button type="button" class="qa-star" aria-pressed="${state.star}" onclick="qaToggleStar('${source}','${id}')" ${available?'':'disabled'}><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.5 4.5h11v15l-5.5-3.75L6.5 19.5z"/></svg>${state.star?'已收藏':'收藏'}</button>`;
}
function qaRefreshState(){const panel=document.getElementById('qa-state');if(panel?.dataset.source&&panel.dataset.question)panel.innerHTML=qaStateControls(panel.dataset.source,panel.dataset.question)}
function qaSaveState(source,id,change){
 if(!cmcCheckinCurrent(source,id))return false;
 const qid=cmcCheckinId(id);if(!cmcQmap[qid])return false;
 let stored;try{stored=cmcValidateRecords(JSON.parse(localStorage.getItem(CMC_REC_KEY)||'{}'))}catch(e){toast('状态未保存，请检查浏览器存储后重试');return false}
 const previous=cmcRecords;cmcRecords={...stored,[qid]:{...(stored[qid]||cmcRec(qid)),...change,updated:Date.now()}};
 if(!cmcStore()){cmcRecords=previous;updateBadge();return false}
 qaRefreshState();return true;
}
function qaSetStatus(source,id,status){
 if(!['correct','wrong'].includes(status))return;
 const selected=qaStudyState(id).status===status?'new':status;
 if(!qaSaveState(source,id,{status:selected,statusUpdated:Date.now()}))return;
 if(source==='drill'&&cmcDrillSession){if(selected==='new')delete cmcDrillSession.ratings[id];else cmcDrillSession.ratings[id]=selected;cmcPersistDrill()}
 toast(selected==='correct'?'已记为掌握':selected==='wrong'?'已加入待重练':'已取消掌握程度标记');
}
function qaToggleStar(source,id){const star=!qaStudyState(id).star;if(qaSaveState(source,id,{star,starUpdated:Date.now()}))toast(star?'已收藏':'已取消收藏')}
window.addEventListener('storage',event=>{
 if(event.key!==CMC_REC_KEY&&event.key!==STORE&&event.key!==null)return;
 try{cmcRecords=cmcValidateRecords(JSON.parse(localStorage.getItem(CMC_REC_KEY)||'{}'));const saved=localStorage.getItem(STORE);if(saved)S=validate(JSON.parse(saved))}catch(e){return}
 qaRefreshState();updateBadge();if(['learning','topics','papers'].includes(route().path))render();
});

function cmcQuestionSourceHTML(id){const canonical=cmcCheckinId(id)||id,q=cmcQmap[canonical],paper=q&&cmcPaperMap[q.paper];return paper?`${cmcPublicSourceLink(paper,'题目公开来源（联网）')}<span>参考答案按原资料整理</span>`:''}

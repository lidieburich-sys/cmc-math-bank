/* Actual artifact counts are generated from downloaded PDF bytes at build time. */
'use strict';
const cmcCorpusData=window.CMC_CORPUS;
const CMC_REC_KEY='cmc-corpus-answers-v3';
let cmcRecords={};
const cmcFilter={paper:'all',text:'',edition:'all',group:'all',stage:'all',kind:'all',method:'all',topic:'all',tagStatus:'all',quality:'all',tab:'all',page:0,perPage:18};
const cmcDetail={id:null,steps:0,opened:false};
const cmcQmap=Object.fromEntries(cmcCorpusData.questions.map(q=>[q.id,q]));
const cmcPaperMap=Object.fromEntries(cmcCorpusData.papers.map(p=>[p.id,p]));
function cmcEscape(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function cmcStore(){try{localStorage.setItem(CMC_REC_KEY,JSON.stringify(cmcRecords));corpusStorageOK=true}catch(e){corpusStorageOK=false;toast('记录未能保存，请导出备份')}const warning=document.getElementById('storage-warning');if(warning)warning.classList.toggle('hidden',corpusStorageOK&&storageOK&&(typeof plusStorageOK==='undefined'||plusStorageOK)&&(typeof checkinStorageOK==='undefined'||checkinStorageOK));updateBadge();return corpusStorageOK}
function cmcRec(id){return cmcRecords[id] || {answer:'',status:'new',star:false,updated:0}}
function cmcFiltered(f=cmcFilter){
 const s=f.text.trim().toLowerCase();
 return cmcCorpusData.questions.filter(q=>(f.paper==='all'||q.paper===f.paper)&&(f.edition==='all'||String(q.edition)===f.edition)&&
 (f.group==='all'||f.group==='nonmath'&&q.group.includes('非数学')||q.group===f.group)&&(f.stage==='all'||q.stage===f.stage)&&
 (f.kind==='all'||q.kind===f.kind)&&(f.method==='all'||cmcMeta(q).method===f.method)&&
 (f.topic==='all'||cmcMeta(q).topics.includes(f.topic))&&
 (f.tagStatus==='all'||f.tagStatus==='tagged'&&cmcMeta(q).primary!=='other'||f.tagStatus==='unreviewed'&&cmcMeta(q).primary==='other'||f.tagStatus==='manual'&&!!cmcTagOverrides[q.id]||f.tagStatus==='high'&&cmcMeta(q).confidence.startsWith('较明确')||f.tagStatus==='verified'&&cmcIsImageTag(cmcMeta(q)))&&
 (f.quality==='all'||f.quality==='issues'&&!!q.prompt_issue||f.quality==='ready'&&q.practice_ready)&&
 (f.tab==='all'||f.tab==='wrong'&&cmcRec(q.id).status==='wrong'||
 f.tab==='correct'&&cmcRec(q.id).status==='correct'||f.tab==='star'&&cmcRec(q.id).star||
 f.tab==='new'&&cmcRec(q.id).status==='new') &&
 (!s||[q.title,q.source_name,q.kind,q.group,q.status,q.year,q.edition,q.search_text||'',...cmcMeta(q).topics.map(cmcTopicName)].join(' ').toLowerCase().includes(s)));
}
function cmcFilteredPapers(){return cmcCorpusData.papers.filter(p=>(cmcFilter.paper==='all'||p.id===cmcFilter.paper)&&(cmcFilter.edition==='all'||String(p.edition)===cmcFilter.edition)&&
 (cmcFilter.group==='all'||cmcFilter.group==='nonmath'&&p.group.includes('非数学')||p.group===cmcFilter.group)&&(cmcFilter.stage==='all'||p.stage===cmcFilter.stage)&&
 (!cmcFilter.text.trim()||[p.title,p.group,p.origin].join(' ').toLowerCase().includes(cmcFilter.text.toLowerCase())))}
function cmcSel(name,value){cmcFilter[name]=value;cmcFilter.page=0;cmcRenderCorpus()}
function cmcTab(name){cmcFilter.tab=name;cmcFilter.page=0;cmcRenderCorpus()}
function cmcOpen(id){location.hash='#corpus/'+encodeURIComponent(id)}
function cmcRenderCorpus(){
 const path=route().path;
 const id=path.startsWith('corpus/')?decodeURIComponent(path.substring(7)):null;
 if(id && cmcQmap[id])return cmcRenderQuestion(id);
 const r=route();
 if(r.path+'?'+r.params.toString()!==lastRoute)Object.assign(cmcFilter,practiceReadFilters('corpus',r.params));
 cmcRenderOverview();
}
function cmcRenderOverview(){
 const selected=cmcFiltered(),offset=cmcFilter.page*cmcFilter.perPage;
 const topic=cmcTopicMap[cmcFilter.topic],paper=cmcPaperMap[cmcFilter.paper];
 const title=topic?topic.name:paper?paper.title:'知识点选题';
 const select=(field,label,values)=>`<select aria-label="${label}" onchange="cmcSel('${field}',this.value)">${values.map(([value,text])=>`<option value="${cmcEscape(value)}" ${cmcFilter[field]===value?'selected':''}>${cmcEscape(text)}</option>`).join('')}</select>`;
 $('#app').innerHTML=`<div class="page cmc-corpus"><a class="text-btn cmc-back-link" href="#${paper?'papers':'topics'}">← ${paper?'整卷训练':'知识点专项训练'}</a><div class="cmc-desk-heading"><h1>${cmcEscape(title)}</h1></div><div class="cmc-filters cmc-simple-filters"><input class="cmc-filter-search" id="cmc-find" placeholder="搜索本组题目" value="${cmcEscape(cmcFilter.text)}" oninput="cmcFilter.text=this.value;cmcFilter.page=0;cmcRefreshRows()" aria-label="搜索本组题目">${select('group','按组别筛选',[['all','所有组别'],['nonmath','非数学类（全部）'],...[...new Set(cmcCorpusData.questions.map(q=>q.group))].map(v=>[v,v])])}${select('stage','按赛段筛选',[['all','所有赛段'],['初赛','初赛'],['决赛','决赛'],['补赛','补赛']])}${select('kind','按题型筛选',[['all','全部题型'],...[...new Set(cmcCorpusData.questions.map(q=>q.kind))].map(v=>[v,v])])}</div><div class="cmc-drill-launch"><strong id="cmc-pool-count">${cmcDrillPool().length} 题可练</strong><div class="cmc-actions"><select id="cmc-drill-size" aria-label="本组训练数量"><option value="5">5 题</option><option value="10">10 题</option><option value="all">当前全部</option></select><button class="primary" onclick="cmcStartDrill(document.getElementById('cmc-drill-size').value)">开始训练 →</button></div></div><div id="cmc-dynamic-rows">${cmcRowsHTML(selected.slice(offset,offset+cmcFilter.perPage),selected.length,cmcCorpusData.papers)}</div></div>`;
}
function cmcRowsHTML(display,total,papers){
 const queue=practiceCreateQueue('corpus',cmcFilter);
 const pagination=`<div class="cmc-pagination"><span class="cmc-muted">${total} 个题目</span><div class="cmc-actions"><button onclick="cmcMovePage(-1)" ${cmcFilter.page===0?'disabled':''}>上一页</button><span class="cmc-muted">${total?cmcFilter.page+1:0} / ${Math.max(1,Math.ceil(total/cmcFilter.perPage))}</span><button onclick="cmcMovePage(1)" ${(cmcFilter.page+1)*cmcFilter.perPage>=total?'disabled':''}>下一页</button></div></div>`;
 const qcards=display.map(q=>{const record=cmcRec(q.id),label=record.status==='correct'?'已掌握':record.status==='wrong'?'待重做':record.star?'已收藏':record.viewed?'已看答案':'未练习';return `<article class="cmc-q-card"><div class="cmc-q-meta">${cmcEscape(q.kind)}${q.has_answer?' · 附参考解答':''}</div><h3 class="cmc-q-title">${cmcEscape(q.title)}</h3><div class="cmc-topic-wrap">${cmcTopicTagsHTML(q,2)}</div>${q.prompt_issue?'<p class="cmc-status">题面待核对</p>':q.exercise_mode==='reference'?'<p class="cmc-status">含答案 · 对照阅读</p>':''}<div class="cmc-card-controls"><span class="cmc-muted">${label}</span><a class="btn soft small" href="${cmcEscape(practiceQuestionHref('corpus',q.id,queue))}">${q.prompt_issue?'对照原卷':'练这题'} ${ic('arrow')}</a></div></article>`}).join('');
 return `${pagination}<div class="cmc-card-grid">${qcards||'<div class="cmc-q-card studio-empty">没有匹配的题目，试着放宽筛选条件。</div>'}</div>${pagination}`;
}
function cmcRefreshRows(){
 const all=cmcFiltered(),o=cmcFilter.page*cmcFilter.perPage;
 const count=document.getElementById('cmc-pool-count');if(count)count.textContent=cmcDrillPool().length+' 个可练题目';
 $('#cmc-dynamic-rows').innerHTML=cmcRowsHTML(all.slice(o,o+cmcFilter.perPage),all.length,cmcCorpusData.papers);
}
function cmcMovePage(delta){
 const max=Math.max(0,Math.ceil(cmcFiltered().length/cmcFilter.perPage)-1);
 cmcFilter.page=Math.max(0,Math.min(max,cmcFilter.page+delta));
 cmcRefreshRows();window.scrollTo({top:160,behavior:'smooth'});
}
function cmcAnswerChange(id,v){const r=cmcRec(id);r.answer=v;r.updated=Date.now();cmcRecords[id]=r;cmcStore()}
function cmcMark(id,status){const r=cmcRec(id);r.status=status;r.updated=Date.now();cmcRecords[id]=r;cmcStore();cmcRenderQuestion(id)}
function cmcStar(id){const r=cmcRec(id);r.star=!r.star;cmcRecords[id]=r;cmcStore();cmcRenderQuestion(id)}
function cmcMoreStep(){cmcFillSteps()}
function cmcAllSteps(){cmcFillSteps()}
function cmcHideSteps(){const el=document.getElementById('cmc-step-panel');if(el)el.innerHTML=''}
function cmcFillSteps(){const q=cmcQmap[cmcDetail.id],el=document.getElementById('cmc-step-panel');if(q&&el)el.innerHTML=qaContent('corpus',q.id).answer}
function cmcRenderQuestion(id){const q=cmcQmap[id];if(!q){navigate('corpus');return}if(cmcDetail.id!==id){cmcDetail.id=id;cmcDetail.steps=0}renderMinimalQuestion('corpus',id)}
function cmcMoveQuestion(d){practiceMove('corpus',cmcDetail.id,d)}

function cmcValidateRecords(raw){
 const safe={};if(!raw||typeof raw!=='object'||Array.isArray(raw))return safe;
 for(const [id,r] of Object.entries(raw)){
  if(!cmcQmap[id]||!r||typeof r!=='object')continue;
  safe[id]={answer:typeof r.answer==='string'?r.answer.slice(0,100000):'',status:['new','correct','wrong'].includes(r.status)?r.status:'new',star:!!r.star,updated:Number(r.updated)||0,...(Number.isFinite(r.statusUpdated)&&r.statusUpdated>0&&r.statusUpdated<=8640000000000000?{statusUpdated:r.statusUpdated}:{}),...(Number.isFinite(r.starUpdated)&&r.starUpdated>0&&r.starUpdated<=8640000000000000?{starUpdated:r.starUpdated}:{}),viewed:Number.isFinite(r.viewed)&&r.viewed>0&&r.viewed<=8640000000000000?r.viewed:0};
 }return safe;
}
try{cmcRecords=cmcValidateRecords(JSON.parse(localStorage.getItem(CMC_REC_KEY))||{})}catch(e){}
function cmcResetFilter(){Object.assign(cmcFilter,{paper:'all',text:'',edition:'all',group:'all',stage:'all',kind:'all',method:'all',topic:'all',tagStatus:'all',quality:'all',tab:'all',page:0});cmcRenderCorpus()}
function cmcNonMath(){Object.assign(cmcFilter,{paper:'all',text:'',edition:'all',group:'nonmath',stage:'初赛',kind:'all',method:'all',topic:'all',tagStatus:'all',quality:'all',tab:'all',page:0});cmcRenderCorpus()}
function cmcSavePaper(){toast('题目与解析已内置；原卷请打开公开来源联网查看')}

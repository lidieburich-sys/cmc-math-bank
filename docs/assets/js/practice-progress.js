'use strict';

// Reading an answer advances reading progress, without assigning a grade.
function cmcDrillAnswered(session,id){return !!(session?.ratings?.[id]||session?.viewed?.[id])}
function cmcDrillReadCount(session=cmcDrillSession){return session?session.ids.filter(id=>cmcDrillAnswered(session,id)).length:0}
function trainingAnswered(session,id){return !!(session?.results?.[id]||session?.viewed?.[id])}
function trainingReadCount(session){return session.ids.filter(id=>trainingAnswered(session,id)).length}
function resumeTraining(){
 const session=X.session;if(!session)return;
 let index=session.index;
 if(trainingAnswered(session,session.ids[index])){
  index=session.ids.findIndex((id,i)=>i>session.index&&!trainingAnswered(session,id));
  if(index<0)index=session.ids.findIndex(id=>!trainingAnswered(session,id));
 }
 if(index>=0)jumpTraining(index);else navigate('training');
}
function recordAnswerViewed(source,id,open){
 if(!open||!['drill','text','corpus'].includes(source))return;
 if(!window.CMC_QA_LATEX?.[id])return;
 if(source==='text'?!QIDS.has(id):!cmcQmap[id])return;
 const current=route(),expected=source==='drill'?'drill':(source==='text'?'question/':'corpus/')+id;
 if(current.path!==expected)return;
 if(source==='drill'&&cmcDrillSession?.ids[cmcDrillSession.index]!==id)return;
 const now=Date.now(),canonical=window.CMC_QA_LATEX?.[id]?.canonical||id;
 if(cmcQmap[canonical]){
  const record=cmcRec(canonical);record.viewed=now;cmcRecords[canonical]=record;cmcStore();
 }
 let textChanged=false;
 for(const q of Q){if(q.id===id||window.CMC_QA_LATEX?.[q.id]?.canonical===canonical){S.viewed[q.id]=now;textChanged=true}}
 if(textChanged)persist();
 if(source==='drill'){
  const session=cmcDrillSession;if(!session||session.ids[session.index]!==id)return;
  (session.viewed||(session.viewed={}))[id]=now;cmcPersistDrill();
 }else if(source==='text'){
  const session=X.session;
  if(!session||current.params.get('training')!==session.id||!session.ids.includes(id))return;
  (session.viewed||(session.viewed={}))[id]=now;session.index=session.ids.indexOf(id);
  if(session.ids.every(question=>trainingAnswered(session,question))&&!session.finished){session.finished=now;keepTraining(session)}
  savePlus();
 }
}

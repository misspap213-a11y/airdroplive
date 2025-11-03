"use client";
import React, { useState } from 'react';

export default function Tasks(){
  const [done, setDone] = useState({t1:false,t2:false,t3:false});

  const toggle = (k) => setDone(prev => ({...prev,[k]:!prev[k]}));

  return (
    <div className="glass">
      <h3>Tasks</h3>
      <div style={{marginTop:10, display:'flex', flexDirection:'column', gap:10}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div><b>Follow on X</b><div className="small">Follow our account</div></div>
          <button onClick={()=>toggle('t1')} className="button">{done.t1 ? 'Done' : 'Complete'}</button>
        </div>

        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div><b>Join Telegram</b><div className="small">Join the community</div></div>
          <button onClick={()=>toggle('t2')} className="button">{done.t2 ? 'Done' : 'Complete'}</button>
        </div>

        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div><b>Retweet</b><div className="small">Share the announcement</div></div>
          <button onClick={()=>toggle('t3')} className="button">{done.t3 ? 'Done' : 'Complete'}</button>
        </div>
      </div>
    </div>
  );
}

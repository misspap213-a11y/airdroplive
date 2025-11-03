"use client";
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

function keyBalance(addr){ return 'airdrop_balance:' + addr; }
function keyClaims(addr){ return 'airdrop_claims:' + addr; }
function keyClaimed(addr){ return 'airdrop_claimed:' + addr; }

export default function RewardClaim(){
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState(0);
  const [claimed, setClaimed] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(()=>{
    if(!address){ setBalance(0); setClaimed(false); setHistory([]); return; }
    try {
      const b = localStorage.getItem(keyBalance(address));
      const c = localStorage.getItem(keyClaimed(address));
      const h = localStorage.getItem(keyClaims(address));
      setBalance(b ? parseInt(b,10) : 0);
      setClaimed(!!c);
      setHistory(h ? JSON.parse(h) : []);
    } catch(e){}
  },[address]);

  const handleClaim = ()=>{
    if(!isConnected){ alert('Connect wallet first'); return; }
    if(claimed){ alert('Already claimed'); return; }
    const ts = Date.now();
    const amount = 1000;
    const newBal = balance + amount;
    const newHistory = [{ amount, timestamp: ts }, ...(history || [])];
    try {
      localStorage.setItem(keyBalance(address), String(newBal));
      localStorage.setItem(keyClaimed(address), '1');
      localStorage.setItem(keyClaims(address), JSON.stringify(newHistory));
    } catch(e){}
    setBalance(newBal);
    setClaimed(true);
    setHistory(newHistory);
    alert('🎉 You claimed ' + amount + ' ARCLIVE tokens (simulated)');
  };

  return (
    <div>
      <div className="small">Simulated ARCLIVE Balance</div>
      <div style={{fontSize:20,fontWeight:700,marginTop:6}}>{balance} ARCLIVE</div>
      <div style={{marginTop:12}}>
        <button onClick={handleClaim} className="button" disabled={claimed}>
          {claimed ? 'Claimed ✅' : 'Claim 1000 ARCLIVE'}
        </button>
      </div>

      <div className="claim-history">
        <h4 style={{margin:0}}>Claim History</h4>
        {history.length === 0 ? <div className="small" style={{marginTop:8}}>No claims yet</div> : (
          <ul style={{marginTop:8, paddingLeft:16}}>
            {history.map((h, i) => (
              <li key={i} className="small">{new Date(h.timestamp).toLocaleString()} — {h.amount} ARCLIVE</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

"use client";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import RewardClaim from '@/components/RewardClaim';
import Tasks from '@/components/Tasks';

export default function Page() {
  const { address } = useAccount();

  return (
    <main className="container">
      <div className="header">
        <h1>ARCLIVE — Airdrop Dashboard</h1>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <ConnectButton showBalance={true} />
        </div>
      </div>

      <div className="grid">
        <div className="glass">
          <h3>Wallet</h3>
          <div style={{marginTop:10}}>
            <div className="small">Address</div>
            <div style={{fontFamily:'monospace'}}>{address ?? 'Not connected'}</div>
          </div>
        </div>

        <div className="glass">
          <h3>Actions</h3>
          <div style={{marginTop:10}}>
            <RewardClaim />
          </div>
        </div>
      </div>

      <Tasks />
    </main>
  );
}

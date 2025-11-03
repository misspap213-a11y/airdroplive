"use client";
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { createPublicClient, http } from 'viem';

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);
const { connectors } = getDefaultWallets({
  appName: 'ARCLIVE Airdrop',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient: createPublicClient({ transport: http() })
});

export default function Providers({ children }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} coolMode>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
}

"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { mainnet } from "wagmi/chains";
import { createPublicClient, http } from "viem";

const { chains } = configureChains(
  [mainnet],
  [() => createPublicClient({ chain: mainnet, transport: http() })]
);

const { connectors } = getDefaultWallets({
  appName: "ARCLIVE Airdrop",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "demo",
  chains,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient: createPublicClient({ chain: mainnet, transport: http() }),
});

export default function Providers({ children }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} coolMode>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

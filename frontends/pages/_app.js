import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, useAccount, WagmiConfig } from "wagmi";

import {
	mainnet, 
	polygon,
	optimism,
	arbitrum,
	goerli,
	polygonMumbai,
	optimismGoerli,
	arbitrumGoerli,
	polygonZkEvm,
	polygonZkEvmTestnet,
} from "wagmi/chains";


import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import MainLayout from "../layout/mainLayout";

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[
		mainnet,
		goerli,
		polygon,
		polygonMumbai,
		optimism,
		optimismGoerli,
		arbitrum,
		arbitrumGoerli,
		polygonZkEvm,
		polygonZkEvmTestnet
	],
	[alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
);
//
const { connectors } = getDefaultWallets({
	appName: "My Alchemy DApp",
	projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
	chains,
});

const config = createConfig({
	autoConnect: true,
	connectors,
	publicClient, webSocketPublicClient
});

export { WagmiConfig, RainbowKitProvider };

function MyApp({ Component, pageProps }) {
	return (
		<WagmiConfig config={config}>
			<RainbowKitProvider
				modalSize="compact"
				initialChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN}
				chains={chains}
			>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default MyApp;
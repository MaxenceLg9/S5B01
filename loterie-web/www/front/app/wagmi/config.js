import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { http, WagmiProvider, createConfig } from 'wagmi'
import { mainnet, linea, lineaSepolia, sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'


export const config = createConfig({
    ssr: true, // Enable this if your dapp uses server-side rendering.
    chains: [mainnet, linea, lineaSepolia, sepolia],
    connectors: [
        metaMask({
            infuraAPIKey: "713df48955dd494984810e5642680efa",
        }),
    ],
    transports: {
        [mainnet.id]: http("https://mainnet.infura.io/v3/713df48955dd494984810e5642680efa"),
        [linea.id]: http(),
        [lineaSepolia.id]: http(),
        [sepolia.id]: http("https://sepolia.infura.io/v3/713df48955dd494984810e5642680efa"),
    },
});
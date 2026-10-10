"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {useConnect, WagmiProvider} from 'wagmi'
import { config } from './config'
import {AutoConnectProvider} from "@/app/components/autoconnect";

const queryClient = new QueryClient()

export function Provider({ children }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <AutoConnectProvider>
                    {children}
                </AutoConnectProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
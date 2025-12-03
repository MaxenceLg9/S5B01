'use client'

import { useEffect } from "react";
import {useAccount, useConnect} from "wagmi";

export function AutoConnectProvider({ children }) {
    const { connectAsync, connectors, status } = useConnect();
    const { isConnected } = useAccount();

    useEffect(() => {
        async function autoConnect() {
            if (status === 'connected') return;
            if (isConnected) return;

            const connector = connectors?.[0];
            if (connector) {
                try {
                    await connectAsync({ connector });
                    console.log("Auto-connected wallet");
                } catch (err) {
                    console.warn("Auto-connect failed:", err);
                }
            }
        }

        autoConnect().then();
    }, []); // run only when connecting is possible

    return <>{children}</>;
}
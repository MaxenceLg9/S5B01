'use client'

import {useAccount, useWriteContract} from "wagmi";
import {useConnectWallet} from "@/app/wagmi/connectwallet";

export function useFunctionWrite(address, abi, functionName, value, args) {
    const {
        writeContractAsync,
        isPending,
        isError,
        error,
        data: txHash,
    } = useWriteContract()

    const { isConnected } = useAccount();

    const { connectWallet } = useConnectWallet();

    async function call() {
        if (!isConnected) {
            try {
                const r = await connectWallet();
                console.log("Wallet connected:", r);
            } catch (err) {
                console.error("Wallet connection failed:", err);
                return;
            }
        }

        console.log("Calling " + functionName)

        try {
            if(value == null)
                return await writeContractAsync({
                    address,
                    abi,
                    functionName,
                    args
                })
            else
                return await writeContractAsync({
                    address,
                    abi,
                    functionName,
                    args,
                    value, // <<<<<< msg.value
                })
        } catch (err) {
            console.error(err)
            console.error("User rejected the transaction")
        }
    }

    return {
        call,
        isPending,
        isError,
        error,
        txHash,
    }
}
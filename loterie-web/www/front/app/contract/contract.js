'use client'

import { useWriteContract } from "wagmi";

export function useFunctionWrite(address, abi, fun, value) {
    const {
        writeContractAsync,
        isPending,
        isError,
        error,
        data: txHash,
    } = useWriteContract()

    async function call() {
        console.log("Calling " + fun)

        try {
            if(value == null)
                await writeContractAsync({
                    address: address,
                    abi: abi,
                    functionName: fun,
                })
            else
                await writeContractAsync({
                    address: address,
                    abi: abi,
                    functionName: fun,
                    value: value, // <<<<<< msg.value
                })

            console.log("Transaction sent:", txHash)
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
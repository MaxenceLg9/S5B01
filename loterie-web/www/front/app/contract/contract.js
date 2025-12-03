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
                return await writeContractAsync({
                    address,
                    abi,
                    functionName: fun,
                })
            else
                return await writeContractAsync({
                    address,
                    abi,
                    functionName: fun,
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
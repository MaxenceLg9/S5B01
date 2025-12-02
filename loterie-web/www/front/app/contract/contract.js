'use client'

import { useReadContract, useWriteContract } from "wagmi";
import { formatUnits } from "ethers";

export function useParticipate(address,abi,fun,value) {
    const {
        writeContractAsync,
        isPending,
        isError,
        error,
        data: txHash,
    } = useWriteContract()

    async function participate() {
        console.log("Calling participate() logic…")

        try {

            await writeContractAsync({
                address: address,
                abi: abi,
                functionName: fun,
                value: value, // <<<<<< msg.value
            })

            console.log("Transaction sent:", txHash)
        } catch (err) {
            console.error("User rejected the transaction")
        }
    }

    return {
        participate,
        isPending,
        isError,
        error,
        txHash,
    }
}


export function GetContractBalance({address,abi,fun}) {

    console.log(abi);
    const {data, error, isPending} = useReadContract({
        address: address,
        abi,
        functionName: fun,
    });

    console.log(data);
    if (isPending) return <div>Loading...</div>

    if (error)
        return (
            <div>
                Error: Connectez-vous
            </div>
        )
    return (
        <div>
            Price: {data ? formatUnits(data, 18) : "-"} ethers
        </div>
    )
}
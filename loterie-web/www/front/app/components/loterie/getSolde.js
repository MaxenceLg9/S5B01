'use client'
import {formatUnits} from "viem";
import {useGetSolde} from "@/app/contract/loterie";

export const GetSolde = ({loterie}) => {
    const {data, error, isPending} = useGetSolde(loterie);

    console.log("Solde", data);
    if (isPending) return <div>Loading...</div>

    if (error)
        return (
            <div>
                Error: Connectez-vous
            </div>
        )
    return (
        <div>
            Solde du compte: {data ? formatUnits(data, 18) : "-"} ethers
        </div>
    )
}
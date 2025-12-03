'use client'
import {useReadContract} from "wagmi";
import {useEffect, useState} from "react";
import {loadAbi} from "@/app/contract/config";
import {formatUnits} from "viem";
import { getAddress } from "@/app/contract/config";

export const GetSolde = () => {
    const [abi, setAbi] = useState(null);
    const [address, setAddr] = useState(null);

    useEffect(() => {
        loadAbi().then(setAbi);
    }, []);

    useEffect(() => {
        getAddress().then(setAddr);
    }, []);

    const {data, error, isPending} = useReadContract({
        address,
        abi,
        functionName: "getSolde",
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
            Solde du compte: {data ? formatUnits(data, 18) : "-"} ethers
        </div>
    )
}
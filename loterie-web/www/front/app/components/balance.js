'use client'

import {useAccount, useReadContract} from "wagmi";
import {formatUnits} from "ethers";
import {useEffect, useState} from "react";
import {getAddress, loadAbi} from "@/app/contract/config";

export function GetContractBalance() {
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
        functionName: "price",
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
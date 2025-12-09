'use client'
import {useFunctionWrite} from "@/app/contract/contract";
import {useReadContract} from "wagmi";
import {useEffect, useState} from "react";
import {getAddress, loadAbi} from "@/app/contract/config";

export function useGetConfig() {
    const [abi, setAbi] = useState(null);
    const [address, setAddr] = useState(null);

    useEffect(() => {
        loadAbi().then(setAbi);
    }, []);

    useEffect(() => {
        getAddress().then(setAddr);
    }, []);
    return {abi, address};
}

export function useDrawContract(loterie){
    const {abi, address} = useGetConfig();

    return useFunctionWrite(address,abi,"randomDraw", null, [loterie]);
}

export function useParticipate(loterie){
    const { data: price } = useGetPrice(loterie);
    const {abi, address} = useGetConfig();

    console.log("Price : ", price);

    return useFunctionWrite(address,abi,"participate", 2n * 10n ** 16n, [loterie]);
}

export function useAddLottery(fee, name){
    const {abi, address} = useGetConfig();

    return useFunctionWrite(address,abi,"addLoterie",null, [fee,name]);
}



export function useGetSolde(loterie){
    const {abi, address} = useGetConfig();

    return useReadContract({
        address,
        abi,
        functionName: "getSolde",
        args: [loterie]
    });
}

export function useGetPrice(loterie){
    const {abi, address} = useGetConfig();

    return useReadContract({
        address,
        abi,
        functionName: "getPrice",
        args: [loterie]
    });
}

export function useGetLoteries(){
    const {abi, address} = useGetConfig();

    return useReadContract({
        address,
        abi,
        functionName: "getLoteries",
    });
}
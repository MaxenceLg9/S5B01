'use client'

import { useEffect, useState } from "react";
import {GetContractBalance} from "../contract/contract";
import { ParticipateContractButton } from "../contract/loterie";
import { Disconnect } from "@/app/components/disconnect";
import {loadAbi, loadConfig} from "@/app/contract/config";

export const ContractButton = () => {
    const [abi, setConfig] = useState(null);

    useEffect(() => {
        loadAbi().then(setConfig);
    }, []);
    return (
        <div>
            <ParticipateContractButton />
            <GetContractBalance address={"0xdFb060cdAcfBEb91B3bAAB470Aa095a94C2f0931"} fun={"price"} abi={abi}></GetContractBalance>
            <Disconnect/>
        </div>
    );
};
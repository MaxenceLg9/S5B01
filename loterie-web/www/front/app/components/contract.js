'use client'

import { useEffect, useState } from "react";
import {GetContractBalance} from "@/app/components/balance";
import { ParticipateContractButton } from "@/app/components/participate";
import { DrawLottery } from "@/app/components/draw";
import { Disconnect } from "@/app/components/disconnect";
import {useAccount} from "wagmi";
import {GetSolde} from "@/app/components/getSolde";

export const ContractButton = () => {
    const { isConnected } = useAccount();

    return (
        <div>
            { isConnected ? (
                <div>
                    Connecté
                </div>
            ) : (
                <div>
                    Veuillez-vous connectez
                </div>
            )
            }
            <ParticipateContractButton />
            <DrawLottery />
            <GetContractBalance></GetContractBalance>
            <GetSolde/>
            <Disconnect/>
        </div>
    );
};
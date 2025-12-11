'use client'

import {GetPrice} from "@/app/components/loterie/price";
import { ParticipateContractButton } from "@/app/components/loterie/participate";
import { DrawLottery } from "@/app/components/loterie/draw";
import { Disconnect } from "@/app/components/loterie/disconnect";
import {useAccount} from "wagmi";
import {GetSolde} from "@/app/components/loterie/getSolde";
import {useParams} from "next/navigation";

export const ContractButton = () => {
    const { address } = useParams();
    const { isConnected } = useAccount();

    return (
        <div>
            {address}
            { isConnected ? (
                <div>
                    Connecté
                </div>
            ) : (
                <div>
                    Veuillez vous connecter
                </div>
            )
            }
            <ParticipateContractButton loterie={address} />
            <DrawLottery loterie={address} />
            <GetPrice loterie={address} />
            <GetSolde loterie={address} />
            <Disconnect/>
        </div>
    );
};
import {useEffect, useState} from "react";
import {loadAbi} from "@/app/contract/config";
import {useAccount} from "wagmi";
import {useConnectWallet} from "@/app/wagmi/connectwallet";
import {useParticipate} from "@/app/contract/contract";

export const ParticipateContractButton = () => {
    const value = 2n * 10n ** 16n;

    const [abi, setConfig] = useState(null);

    useEffect(() => {
        loadAbi().then(setConfig);
    }, []);

    const { address, isConnected } = useAccount();
    const { participate } = useParticipate("0xdFb060cdAcfBEb91B3bAAB470Aa095a94C2f0931",abi,"participate",value);

    const { connectWallet } = useConnectWallet();

    useEffect(() => {
        if (isConnected) {
            alert("User connected successfully! " + address);
        }
    }, [isConnected, address]);

    async function handleClick() {
        if (!isConnected) {
            try {
                const result = await connectWallet();
                console.log("Wallet connected:", result);
            } catch (err) {
                console.error("Wallet connection failed:", err);
            }
        }

        await participate();
    }

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Participer à la Loterie
        </button>
    );
};
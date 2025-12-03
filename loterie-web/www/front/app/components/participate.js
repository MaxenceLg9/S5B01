import {useEffect, useState} from "react";
import {loadAbi} from "@/app/contract/config";
import {useAccount} from "wagmi";
import {useConnectWallet} from "@/app/wagmi/connectwallet";
import {useFunctionWrite} from "@/app/contract/contract";
import { getAddress } from "@/app/contract/config";

export const ParticipateContractButton = () => {
    const value = 2n * 10n ** 16n;

    const [abi, setAbi] = useState(null);
    const [address, setAddr] = useState(null);

    useEffect(() => {
        loadAbi().then(setAbi);
    }, []);

    useEffect(() => {
        getAddress().then(setAddr);
    }, []);

    const { isConnected } = useAccount();
    const { call } = useFunctionWrite(address,abi,"participate",value);

    const { connectWallet } = useConnectWallet();

    async function handleClick() {
        if (!isConnected) {
            try {
                const result = await connectWallet();
                console.log("Wallet connected:", result);
            } catch (err) {
                console.error("Wallet connection failed:", err);
            }
        }

        await call();
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={handleClick}>
                Participer à la Loterie
            </button>
        </div>
    );
};
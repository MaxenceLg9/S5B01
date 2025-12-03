import {useEffect, useState} from "react";
import {getAddress, loadAbi} from "@/app/contract/config";
import {useAccount} from "wagmi";
import {useConnectWallet} from "@/app/wagmi/connectwallet";
import {useFunctionWrite} from "@/app/contract/contract";

export const DrawLottery = () => {
    const [abi, setAbi] = useState(null);
    const [address, setAddr] = useState(null);

    useEffect(() => {
        loadAbi().then(setAbi);
    }, []);

    useEffect(() => {
        getAddress().then(setAddr);
    }, []);

    const { isConnected } = useAccount();
    const { call } = useFunctionWrite(address,abi,"randomDraw", null);

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
                Tirage aléatoire
            </button>
        </div>
    );
};
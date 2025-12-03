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

    const [result, setResult] = useState(null);

    async function handleClick() {
        if (!isConnected) {
            try {
                const r = await connectWallet();
                console.log("Wallet connected:", r);
            } catch (err) {
                console.error("Wallet connection failed:", err);
                return;
            }
        }

        // Call the contract function
        const callResult = await call();
        setResult(callResult);
    }


    return (
        <div>
            <button className="btn btn-primary" onClick={handleClick}>
                Tirage aléatoire
            </button>

            {result && (
                <div style={{ marginTop: "1rem" }}>
                    <strong>Result:</strong> {result.toString()}
                </div>
            )}
        </div>
    );

};
import {useState} from "react";
import {useDrawContract} from "@/app/contract/loterie";

export const DrawLottery = ({loterie}) => {
    const { call } = useDrawContract(loterie);

    const [result, setResult] = useState(null);

    async function handleClick() {
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
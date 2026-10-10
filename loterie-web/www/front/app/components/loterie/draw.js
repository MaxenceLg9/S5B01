import {useState} from "react";
import {useDrawContract} from "@/app/contract/loterie";
import styles from "@/app/components/addLottery.module.css";

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
            <button
                className={styles.btnAddLottery}
                onClick={handleClick}
            >
                <i className="fas fa-plus"></i>
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

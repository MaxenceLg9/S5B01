import {useParticipate} from "@/app/contract/loterie";
import styles from '../addLottery.module.css'

export const ParticipateContractButton = ({loterie}) => {
    const { call } = useParticipate(loterie);

    return (
        <div>
            <button
                className={styles.btnAddLottery}
                onClick={() => call?.call()}
            >
                <i className="fas fa-plus"></i>
                Participer à la Loterie
            </button>
        </div>
    );
};
'use client'
import {useDisconnect} from "wagmi";
import styles from './disconnect.module.css'

export const Disconnect = () => {
    const { disconnect } = useDisconnect();
    return (
        <button className={styles.btnDisconnect} onClick={disconnect}>
            <i className="fas fa-sign-out-alt"></i>
            Déconnexion
        </button>
    );
}
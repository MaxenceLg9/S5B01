'use client'

import { useState } from 'react'
import { useAddLottery } from "@/app/contract/loterie"
import { useQueryClient } from '@tanstack/react-query'
import {config} from "@/app/wagmi/config";
import { waitForTransactionReceipt } from 'wagmi/actions'
import styles from './addLottery.module.css'

export const AddLottery = () => {
    const [name, setName] = useState('')
    const [fee, setFee] = useState(1)
    const { call, isPending } = useAddLottery(fee, name)
    const queryClient = useQueryClient()

    const handleClick = async () => {
        if (!name) {
            alert("Veuillez entrer un nom de loterie")
            return
        }

        try {
            const txHash = await call()
            await waitForTransactionReceipt(config, {
                hash: txHash,
            })
            await queryClient.invalidateQueries(['getLoteries'])
            setName('')
            setFee(1)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className={styles.formContainer}>
            <input
                type="text"
                placeholder="Nom de la loterie"
                value={name}
                onChange={e => setName(e.target.value)}
                className={styles.input}
            />
            <input
                type="number"
                placeholder="Frais (ETH)"
                value={fee}
                onChange={e => setFee(Number(e.target.value))}
                className={styles.input}
                step="0.1"
                min="0"
            />
            <button 
                className={styles.btnAddLottery}
                onClick={handleClick} 
                disabled={isPending}
            >
                <i className="fas fa-plus"></i>
                {isPending ? "Ajout en cours..." : "Ajouter Loterie"}
            </button>
        </div>
    )
}
'use client'

import { useState } from 'react'
import { useAddLottery } from "@/app/contract/loterie"
import { useQueryClient } from '@tanstack/react-query'
import {config} from "@/app/wagmi/config";
import { waitForTransactionReceipt } from 'wagmi/actions'

export const AddLottery = () => {
    const [name, setName] = useState('')
    const [fee, setFee] = useState(1) // default fee
    const { call, isPending } = useAddLottery(fee, name)
    const queryClient = useQueryClient()

    const handleClick = async () => {
        if (!name) {
            alert("Please enter a lottery name")
            return
        }

        try {
            const txHash = await call()
            // Automatically refresh Loteries
            await waitForTransactionReceipt(config, {
                hash: txHash,
            })
            await queryClient.invalidateQueries(['getLoteries'])
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Lottery name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Fee (ETH)"
                value={fee}
                onChange={e => setFee(Number(e.target.value))}
            />
            <button className="btn btn-primary" onClick={handleClick} disabled={isPending}>
                {isPending ? "Adding..." : "Add Lottery"}
            </button>
        </div>
    )
}
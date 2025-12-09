// Parent component (Home)
'use client'
import { useState } from 'react'
import { Loteries } from "@/app/components/loteries"
import { AddLottery } from "@/app/components/addLottery"
import { Disconnect } from "@/app/components/loterie/disconnect"

export default function Home() {
    const [refresh, setRefresh] = useState(0)

    const handleAdded = () => {
        setRefresh(prev => prev + 1) // increment to trigger re-render
    }

    return (
        <div>
            <h1>Loteries disponibles</h1>
            <AddLottery/>
            <Loteries/>
            <Disconnect/>
        </div>
    )
}
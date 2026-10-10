'use client'

import {formatUnits} from "ethers";
import {useGetPrice} from "@/app/contract/loterie";

export const GetPrice = ({loterie}) => {
    const {data, isPending, error} = useGetPrice(loterie)

    console.log(data);
    if (isPending) return <div>Loading...</div>

    if (error)
        return (
            <div>
                Error: Connectez-vous
            </div>
        )
    return (
        <div style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)', border: '1px solid #3b82f6', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#93c5fd', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Prix d'entrée</p>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#60a5fa' }}>
                {data ? formatUnits(data, 18) : "-"} ethers</p>
            <p style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>ETH</p>
        </div>
    )
}
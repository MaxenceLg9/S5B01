'use client'
import {formatUnits} from "viem";
import {useGetSolde} from "@/app/contract/loterie";

export const GetSolde = ({loterie}) => {
    const {data, error, isPending} = useGetSolde(loterie);

    console.log("Solde", data);
    if (isPending) return <div>Loading...</div>

    if (error)
        return (
            <div>
                Error: Connectez-vous
            </div>
        )
    return (
        <div style={{ background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)', border: '1px solid #22c55e', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#86efac', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Solde du compte</p>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#22c55e' }}>{data ? formatUnits(data, 18) : "-"} ethers</p>
            <p style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>ETH</p>
        </div>
    )
}
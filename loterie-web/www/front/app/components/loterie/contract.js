'use client'

import {GetPrice} from "@/app/components/loterie/price";
import { ParticipateContractButton } from "@/app/components/loterie/participate";
import { DrawLottery } from "@/app/components/loterie/draw";
import { Disconnect } from "@/app/components/loterie/disconnect";
import {useAccount} from "wagmi";
import {GetSolde} from "@/app/components/loterie/getSolde";
import {useParams} from "next/navigation";

export const ContractButton = () => {
    const { address } = useParams();
    const { isConnected } = useAccount();

    return (
        <div>
            {address}

            <ParticipateContractButton loterie={address} />
            <DrawLottery loterie={address} />


            <Disconnect/>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px', background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Loterie
                    </h1>
                    <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>Participer à la loterie décentralisée</p>
                </div>

                {/* Contract Info Card */}
                <div style={{ background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)', border: '1px solid #334155', borderRadius: '16px', padding: '24px', marginBottom: '24px', backdropFilter: 'blur(10px)' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ fontSize: '12px', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Adresse du Contrat</p>
                        <p style={{ fontSize: '12px', color: '#e2e8f0', fontFamily: 'monospace', wordBreak: 'break-all', backgroundColor: '#0f172a', padding: '12px', borderRadius: '8px' }}>{address}</p>
                    </div>
                </div>
                <div style={{ background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)', border: '1px solid #334155', borderRadius: '16px', padding: '24px', marginBottom: '24px', backdropFilter: 'blur(10px)' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ fontSize: '12px', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Statut</p>
                        <p style={{ fontSize: '12px', color: '#e2e8f0', fontFamily: 'monospace', wordBreak: 'break-all', backgroundColor: '#0f172a', padding: '12px', borderRadius: '8px' }}>                { isConnected ? (
                            <div>
                                Connecté
                            </div>
                        ) : (
                            <div>
                                Veuillez vous connecter
                            </div>
                        )
                        }</p>
                    </div>
                </div>


                {/* CTA Button */}
                <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                        <GetPrice loterie={address} />
                        <GetSolde loterie={address} />
                    </div>
                </div>

                {/* Info Footer */}
                <div style={{ background: 'rgba(100, 116, 139, 0.1)', border: '1px solid #475569', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <p style={{ fontSize: '12px', color: '#cbd5e1', margin: '0' }}>Assurez-vous d'avoir suffisamment d'ETH avant de participer</p>
                </div>
            </div>
        </div>
    );
};
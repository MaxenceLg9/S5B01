'use server'
import {ContractButton} from "@/app/components/loterie/contract";


export default async function Page({ params }) {
    const { address } = await params;

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#fff', padding: '40px 20px' }}>
            <ContractButton />
        </div>
    );
}
import {useAccount, useConnect} from "wagmi";
import {useEffect} from "react";
import {useGetLoteries} from "@/app/contract/loterie";

export const Loteries = () => {
    const { data, isLoading, error } = useGetLoteries();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    if (!data) return null;

    const [addresses, names] = data;

    return (
        <ul>
            {addresses.map((addr, i) => (
                <li key={addr}>
                    <strong>{names[i]}</strong> — {addr}
                </li>
            ))}
        </ul>
    );
};
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
        <div>
            Price: {data ? formatUnits(data, 18) : "-"} ethers
        </div>
    )
}
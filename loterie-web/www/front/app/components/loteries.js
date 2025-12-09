'use client'

import { useGetLoteries } from "@/app/contract/loterie"
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from "react"

export const Loteries = () => {
    const queryClient = useQueryClient()
    const { data, refetch, isFetching } = useGetLoteries({
        queryKey: ['getLoteries'] // important for invalidation
    })

    if (isFetching) return <div>Loading...</div>
    if (!data) return <div>No lotteries</div>

    const [addresses, names] = data

    return (
        <ul>
            {addresses.map((addr, i) => (
                <li key={addr}>
                    {names[i]} - {addr}
                </li>
            ))}
        </ul>
    )
}
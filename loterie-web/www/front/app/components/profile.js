"use client"

import {useAccount, useEnsName} from 'wagmi'

export function Profile() {
    const { address } = useAccount()
    // const { data, error, status } = useEnsName({ address: "0x5A1583771E473A5B9F35a1fc164ffc9702489F01" })
    const { data, error, status } = useEnsName({ address})
    if (status === 'pending') return <div>Loading ENS name</div>
    if (status === 'error')
        return <div>Error fetching ENS name: {error.message}</div>
    return <div>ENS name: {data}</div>
}
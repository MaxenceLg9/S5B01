'use client'

import {useAccount, useConnect, useConnection, useDisconnect, useEnsName } from 'wagmi'

export const ConnectButton = () => {
    const { address } = useAccount()
    const { connectors, connect } = useConnect()
    const {connection } = useConnection()
    const { disconnect } = useDisconnect()
    const result = useEnsName({
        address,
    })

    return (
        <div>
            {address ? (
                <div>
                    <div> Address : {address} / ENS: {result.data} / Connection : {connection} </div>
                    <button onClick={() => disconnect()}>Disconnect</button>
                </div>
            ) : (
                <div>
                    {connectors.map(connector => (
                            <button key={connector.uid} onClick={() => connect({ connector })}>
                                {connector.name}
                            </button>
                    ))}
                </div>
            )}
        </div>
    )
}
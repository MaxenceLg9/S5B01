import { useConnect } from "wagmi";

export function useConnectWallet() {
    const { connectors, connectAsync } = useConnect();

    async function connectWallet() {
        const connector = connectors?.[0];
        if (!connector) {
            throw new Error("No wallet connector found");
        }

        // connectAsync returns a Promise
        return await connectAsync({ connector });
    }

    return { connectWallet };
}
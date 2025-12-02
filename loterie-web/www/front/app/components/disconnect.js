import {useDisconnect} from "wagmi";

export const Disconnect = () => {
    const { disconnect } = useDisconnect();
    return (
        <button className="btn btn-primary" onClick={disconnect}>
            Disconnect
        </button>
    );
}
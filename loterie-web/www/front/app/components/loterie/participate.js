import {useParticipate} from "@/app/contract/loterie";

export const ParticipateContractButton = ({loterie}) => {
    const { call } = useParticipate(loterie);

    return (
        <div>
            <button className="btn btn-primary" onClick={() => call?.call()}>
                Participer à la Loterie
            </button>
        </div>
    );
};
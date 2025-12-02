import Image from "next/image";
import {Profile} from "@/app/components/profile";
import {ConnectButton} from "@/app/components/button";
import {ContractButton} from "@/app/components/contract";




export default function Page() {
    return (
        <div>
            <Profile />
            <ContractButton />
        </div>
    );
}
'use server'
import Image from "next/image";
import {Profile} from "@/app/components/profile";
import {ConnectButton} from "@/app/components/button";
import {ContractButton} from "@/app/components/contract";
import {getConfigPosition} from "@/app/contract/config";




export default async function Page() {
    return (
        <div>
            <Profile />
            <ContractButton />
        </div>
    );
}
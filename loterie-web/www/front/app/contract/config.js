'use server'

import {promises as fs} from 'fs';

export async function getAddress(){
    return "0xa9a52FdE17F8CAF109e9B9289Bd4a60BB3E602F6"
}

export async function loadConfig() {
    console.log(process.cwd())
    const file = await fs.readFile(process.cwd() + '/config.json', 'utf8');
    return JSON.parse(file);
}

export async function loadAbi() {
    return (await loadConfig()).abi;
}
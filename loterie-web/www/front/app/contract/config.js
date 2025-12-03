'use server'

import {promises as fs} from 'fs';

export async function loadConfig() {
    console.log(process.cwd())
    const file = await fs.readFile(process.cwd() + '/config.json', 'utf8');
    return JSON.parse(file);
}

export async function loadAbi() {
    return (await loadConfig()).abi;
}
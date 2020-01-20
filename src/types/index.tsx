import { Pompe } from "../modules/Pompe";

export interface StoreState {
    languageName: string;
    enthusiasmLevel: number;
    pompes: Pompe[];
}
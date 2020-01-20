export enum TypeBiere {
    BLANCHE = "Blanche",
    AMBREE = "Ambrée",
    BLONDE = "Blonde",
    NOEL = "Bière de Noel",
    PRINTEMPS = "Bière de Printemps"

}

export class Pompe {
    outflow: number = 0;
    type: string = TypeBiere.BLANCHE;
}
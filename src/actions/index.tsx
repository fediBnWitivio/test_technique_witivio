import * as constants from '../constants';
import axios from 'axios';
import { Pompe, TypeBiere } from '../modules/Pompe';

export interface ChangerPression {
    type: constants.CHANGER_PRESSION;
    index: number,
    valeur: number
}

export interface SelectPompe {
    type: constants.SELECT_POMPE;
    test?: number
}

export interface AjouterPompe {
    type: constants.AJOUTER_POMPE;
    pompe: Pompe
}

export interface GetList {
    type: constants.GET_LIST;
    pompes: Pompe[];
}

export type PompesAction = ChangerPression | GetList | SelectPompe | AjouterPompe;

export function changerPression(index: number, valeur: number): ChangerPression {
    return {
        type: constants.CHANGER_PRESSION,
        index: index,
        valeur: valeur,
    };
}

export function selectPompe(index: number): SelectPompe {
    return {
        type: constants.SELECT_POMPE,
        test: index,
    };
}

export function ajouterPompe(pompe: Pompe): AjouterPompe {
    axios.post(`http://localhost:8080/pompe/`, pompe, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return {
        type: constants.AJOUTER_POMPE,
        pompe: pompe,
    };
}

export function getList(): GetList {
    // simuler les donnees d'une db
    let pompes = [
        {
            outflow: 2,
            type: TypeBiere.BLONDE
        },
        {
            outflow: 2,
            type: TypeBiere.BLONDE
        },
        {
            outflow: 2,
            type: TypeBiere.BLONDE
        },
    ]

    return {
        type: constants.GET_LIST,
        pompes: pompes,
    };
}
import { PompesAction } from '../actions';
import { StoreState } from '../types/index';
import { CHANGER_PRESSION, GET_LIST, SELECT_POMPE, AJOUTER_POMPE } from '../constants/index';

export function enthusiasm(state: StoreState, action: PompesAction): StoreState {
  switch (action.type) {
    case CHANGER_PRESSION:
      return { 
        ...state,
        pompes: state.pompes.map((pompe, index) => {
          if (index === action.index)
            pompe.outflow = Math.max(0, pompe.outflow + action.valeur)
          return pompe
        })
      };
    case SELECT_POMPE:
      return { ...state };
    case AJOUTER_POMPE:
      return { 
        ...state,
        pompes: [...state.pompes, action.pompe]
      };
    case GET_LIST:{
      return { ...state, pompes: [...state.pompes, ...action.pompes]};
    }
    default:
      return state;
  }
}
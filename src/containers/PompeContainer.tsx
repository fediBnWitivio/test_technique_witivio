import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Pompe } from '../modules/Pompe';
import ListePompesComponent from '../components/ListePompesComponent';
import ManagerPompeComponent from '../components/ManagerPompeComponent';

interface StateFromProps {
  pompes: Pompe[],
}

interface DispatchFromProps {
  changerPression: (index: number, valeur: number) => void;
  getList: () => void;
  ajouterPompe: (pompe: Pompe) => void;
}

export function mapStateToProps({ pompes }: StoreState) {
  return {
    pompes: pompes,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.PompesAction>) {
  return {
    changerPression: (index: number, valeur: number) => dispatch(actions.changerPression(index, valeur)),
    getList: () => dispatch(actions.getList()),
    ajouterPompe: (pompe: Pompe) => dispatch(actions.ajouterPompe(pompe)),
  };
}

export default connect<StateFromProps, DispatchFromProps, any>(mapStateToProps, mapDispatchToProps)(ManagerPompeComponent);

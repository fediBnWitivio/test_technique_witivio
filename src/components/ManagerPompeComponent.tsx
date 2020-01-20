import React, { Component } from 'react';
import { Pompe } from '../modules/Pompe';
import AjoutPompeComponent from './AjoutPompeComponent';
import ListePompesComponent from './ListePompesComponent';

export interface MyProps {
    pompes: Pompe[];
    changerPression: (index: number, valeur: number) => void;
    getList: () => void;
    ajouterPompe: (pompe: Pompe) => void;
}
export interface State {
}

class ManagerPompeComponent extends Component<MyProps, State> {
    constructor(props: MyProps) {
        super(props);
    }

    componentDidMount() {
        this.props.getList();
    }

    render() {
        const {pompes} = this.props
        return(
            <div className='app-background'>
                <AjoutPompeComponent pompes={pompes} ajouterPompe={this.props.ajouterPompe}/>
                <ListePompesComponent pompes={pompes} changerPression={this.props.changerPression}/>
            </div>
        )
    }
}

export default ManagerPompeComponent;

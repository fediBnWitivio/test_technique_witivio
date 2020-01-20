import React, { Component } from 'react';
import { Pompe } from '../modules/Pompe';
import PompeComponent from './PompeComponent';

export interface MyProps {
    pompes: Pompe[];
    changerPression: (index: number, valeur: number) => void;
}
export interface State {
}

class ListePompesComponent extends Component<MyProps, State> {
    constructor(props: MyProps) {
        super(props);
    }

    render() {
        const listPompes = this.props.pompes.map((pompe, index) => {
            return this.renderPompe(pompe, index)
        })

        return (
            <div className='pompes-slider'>
                {listPompes}
            </div>
        )
    }

    renderPompe = (pompe: Pompe, index: number) => {
        return (
            <PompeComponent key={index} pompe={pompe} index={index} changerPression={this.props.changerPression}/>
        )
    }
}

export default ListePompesComponent;

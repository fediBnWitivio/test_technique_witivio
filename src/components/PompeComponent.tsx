import React, {Component} from 'react';
import { Pompe } from '../modules/Pompe';

export interface MyProps {
  pompe: Pompe;
  index: number;
  changerPression: (index: number, valeur: number) => void;
}
export interface State {
}

class PompeComponent extends Component<MyProps, State> {
  constructor(props: MyProps) {
    super(props);
  }

  render() {
    const {index, pompe} = this.props
    return (
      <div key={index} className='pompe-container'>
        <div className='pompe-desc'>
          <p><b>Type:</b> {pompe.type}</p>
          <p><b>Outflow:</b> {pompe.outflow} L/seconde</p>
          <div className='buttons'>
            <p onClick={() => this.props.changerPression(index, 1)}>+</p>
            <p onClick={() => this.props.changerPression(index, -1)}>-</p>
          </div>
        </div>
        <img src='/images/pompe.png' />
      </div>
    )
  }
}

export default PompeComponent;
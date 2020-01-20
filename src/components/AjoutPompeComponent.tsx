import React, {Component} from 'react';
import { Pompe, TypeBiere } from '../modules/Pompe';

export interface MyProps {
  pompes: Pompe[];
  ajouterPompe: (pompe: Pompe) => void;
}
export interface State {
  commencer: boolean;
  pompe: Pompe;
}

class AjoutPompeComponent extends Component<MyProps, State> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      commencer: false,
      pompe: {
        outflow: 0,
        type: TypeBiere.BLANCHE
      },
    }
  }

  handleAjoutPompe = () => {
    this.props.ajouterPompe(this.state.pompe)
    this.setState({
      pompe: {
        outflow: 0,
        type: TypeBiere.BLANCHE
      }
    })
  }

  handleCommencer = () => {
    this.setState({commencer: true})
  }

  handleModifierPression = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      pompe: {
        ...this.state.pompe,
        outflow: Math.max(0, parseInt(e.currentTarget.value))
      }
    })
  }

  handleModifierType = (e: React.FormEvent<HTMLSelectElement>) => {
    this.setState({
      pompe: {
        ...this.state.pompe,
        type: e.currentTarget.value
      }
    })
  }

  renderTypes = () => {
    let elements = []
    for (var type in TypeBiere) {
      elements.push(<option key={type} value={type}>{type}</option>)
    }
    return elements
  }

  renderMainContent = () => {
    if (this.state.commencer) {
      return (
        <div className='main-content'>
          <div className='panel'>
            <p className='titre'>Fiche Technique</p>
            <p className='sous-titre'>Nouvelle Pompe</p>
            <div className='contenu'>
              <img src='/images/pompe.png' />
              <div className='form-container'>
                <div className='form-group'>
                  <label>Débit en L/secondes: </label>
                  <input
                    type='text'
                    value={this.state.pompe.outflow || 0}
                    onChange={this.handleModifierPression}
                  />
                </div>

                <div className='form-group'>
                  <select
                    className='select'
                    onChange={this.handleModifierType}
                    value={this.state.pompe.type}
                  >
                    {this.renderTypes()}
                  </select>
                </div>
              </div>
            </div>
            
          </div>
          <div className='btn-commencer' onClick={this.handleAjoutPompe}>
            <p>Ajouter</p>
          </div>
        </div>
      )
    } else {
      return(
        <div className='main-content'>
          <p>Cliquez sur Commencer, et ajoutez une nouvelle pompe. Elle sera ajoutée à la collection au-dessus de la table. Vous pouvez passer votre souris au-dessus des pompes pour voir leurs détails. Vous pouvez ensuite augmenter ou diminuer le débit avec les boutons + et -</p>
          <div className='btn-commencer' onClick={this.handleCommencer}>
            <p >Commencer</p>
          </div>
        </div>
      )
    }
  }

  render() {
      return(
        <div className='left-container'>
          <div className='witivio-logo'/>
          <div className='titre'>
              <p className='binouze'>Binouze CORP.</p>
              <p className='sous-titre'>Vous présente</p>
              {this.renderMainContent()}
          </div>
        </div>
      )
  }
}

export default AjoutPompeComponent;

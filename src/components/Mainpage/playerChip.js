import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Chip extends Component {

    handleClick = function(playerID, slotID){
      this.props.rollPokemon(playerID, slotID);
      setTimeout(this.props.fetchPokemonData(), 5000);
    }

    render() {
        const {playerID, numberID, color, pokemonID} = this.props;
        return(
            <div className={`chip chip-${numberID}${playerID % 2 ? '_reverse' : ''}`}>
                <img className='chip-image' src={require(`../../assets/Chips/${color}.png`)}/>
                <img
                    id={`player${playerID}-chip${numberID}`}
                    className="test"
                    src={require(`../../assets/SpriteResources/${pokemonID}.png`)}
                />
                <a onClick={() => this.handleClick(playerID, numberID)}>
                </a>
            </div>
        )
    }
}


export default connect(null, actions)(Chip);

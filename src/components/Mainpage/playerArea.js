import React, {Component} from 'react';
import Chip from './playerChip';

class PlayerArea extends Component{

  render(){
    const{id, name, imageUrl, card, color, pokemon1, pokemon2, pokemon3} = this.props.player;

    return(

      <div className={`player-container-${id}`}>
          <div className={`player-imageHolder${id < 3 ? '' : '_bottom'}`}>
            
            <div className='player-image'>
              {/* <img className='player-image_border' src={require('../../assets/player-border.png')}/> */}
              <img className = 'player-image_image' src = {`https://fillmurray.com/50/50`} id={`player-image-${id}`}/>
            </div>

            <div className='card'>
              <img className='card_border' src={require('../../assets/card-border.png')}/>
              <img className = 'card_image' src = {`https://fillmurray.com/60/60`}/>
            </div>
          </div>

          <div className={`playerName${id % 2 ? '' : '_reverse'} ${id < 3 ? 'playerName_top' : 'playerName_bottom'}`}>
            {`${name}`}
          </div>

          <div className={`chipArea`}>
            <Chip
            playerID = {id}
            numberID = {'1'}
            color = {`${color}`}
            pokemonID = {pokemon1}
            />
            <Chip
            playerID = {id}
            numberID = {'2'}
            color = {`${color}`}
            pokemonID = {pokemon2}
            />
            <Chip
            playerID = {id}
            numberID = {'3'}
            color = {`${color}`}
            pokemonID = {pokemon3}
            />
          </div>

      </div>
    )
  }
}

export default PlayerArea;

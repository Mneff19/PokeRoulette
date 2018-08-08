import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import PlayerArea from './Mainpage/playerArea';

class MainPage extends Component {

  componentDidMount() {
    this.props.fetchPlayerData();
    console.log('Fetching Player Data');
  }

  render(){

    return(
      <div className='mainpage_container BG'>

        {/*All of the player info boxes, including the chips*/}

        <PlayerArea
          player = {this.props.Players[0]}
        />
        <PlayerArea
          player = {this.props.Players[1]}
        />
        <PlayerArea
          player = {this.props.Players[2]}
        />
        <PlayerArea
          player = {this.props.Players[3]}
        />


      {/*Everything in the middle*/}
      {/* <div className='mainpage_container_middle'>
        <div className='roulette'>
          <div className='roulette_image_holder'>
            <img className='roulette_image_holder_image' src={"https://placecage.com/1300/1200"}/>
          </div>
          <div className='roulette_type_holder'>
            <button>Roll</button>
            <select id="gameMode">

              <option value="default">Select One</option>
              <option value="ffa">Free For All</option>
            </select>
          </div>
        </div>
      </div> */}
    </div>

  )
  }
}

function mapStateToProps(state) {
  const Players = state.Players;
  return{
    Players
  }
};

MainPage = connect(mapStateToProps, actions)(MainPage);

export default MainPage;

import React, {Component} from 'react';


class HomePage extends Component {

  render(){
    return(
      <div className="homepage_container">
        <div id="imgHolder" className="slow homepage_container_centerImageHolder">

          <img 
            className = "roulette-wheel"
            src = {require("../assets/Flame.png")}
            alt = "flame wheel" 
          />

          <img
            className="roulette-wheel"
            src={require("../assets/Electric.png")}
            alt="flame wheel"
          />

          <img
            className="roulette-wheel"
            src={require("../assets/Psychic.png")}
            alt="flame wheel"
          />

          <img
            className="roulette-wheel"
            src={require("../assets/Water.png")}
            alt="flame wheel"
          />

          </div>

        <div className="homepage_container_buttonHolder">
          <button id='homepageCenterButton'>Take me to the Game</button>
        </div>
      </div>
    )
  }
}

export default HomePage;

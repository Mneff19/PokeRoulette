import React, {Component} from 'react';

import RouletteWheel from './Homepage/wheelHolder';


class HomePage extends Component {

  render(){
    return(
      <div className="homepage_container">
        <div className='BG'></div>

        <RouletteWheel/>
        <RouletteWheel/>

        {/* <div className="homepage_container_buttonHolder">
          <button id='homepageCenterButton'>Take me to the Game</button>
        </div> */}

      </div>
    )
  }
}

export default HomePage;

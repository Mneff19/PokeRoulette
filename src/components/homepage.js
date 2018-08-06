import React, {Component} from 'react';

import RouletteWheel from './Homepage/wheelHolder';
import HomeButton from './Homepage/homeButton';


class HomePage extends Component {

  render(){
    return(

      <div className="homepage_container BG">

        <RouletteWheel/>
        <RouletteWheel/>

        <HomeButton/>

      </div>
    )
  }
}

export default HomePage;

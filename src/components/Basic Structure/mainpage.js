import React, {Component} from 'react';
var test = null;

class MainPage extends Component {



  componentWillMount () {
    test = '../../assets/SpriteResources/1.png';
  }

  render(){



    //var test2 = require('../../assets/SpriteResources/1.png');

    return(
      <div className='mainpage_container'>
        <div className={'playerArea mainpage_container_1'}>
          <div className='playerArea_imageHolder'>
            <img className='playerArea_imageHolder_playerImage' src={require(test)}/>
            <div className='playerArea_imageHolder_title'>Test</div>
            <div className='playerArea_imageHolder_cardHolder'>
              <img className='playerArea_imageHolder_cardImage' src={'../../assets/SpriteResources/10.png'}/>
            </div>
          </div>
        </div>

        <div className='playerArea mainpage_container_2'>
          <div className='playerArea_imageHolder'>
            <img className='playerArea_imageHolder_playerImage' src={"../../assets/SpriteResources/1.png"}/>
            <div className='playerArea_imageHolder_title'>Test</div>
            <div className='playerArea_imageHolder_cardHolder'>
              <img className='playerArea_imageHolder_cardImage' src={'../../assets/SpriteResources/10.png'}/>
            </div>
          </div>
        </div>

        <div className='playerArea mainpage_container_3'>
          <div className='playerArea_imageHolder'>
            <img className='playerArea_imageHolder_playerImage' src={"../../assets/SpriteResources/1.png"}/>
            <div className='playerArea_imageHolder_title'>Test</div>
            <div className='playerArea_imageHolder_cardHolder'>
              <img className='playerArea_imageHolder_cardImage' src={'../../assets/SpriteResources/10.png'}/>
            </div>
          </div>
        </div>

        <div className='playerArea mainpage_container_4'>
          <div className='playerArea_imageHolder'>
            <img className='playerArea_imageHolder_playerImage' src={"../../assets/SpriteResources/1.png"}/>
            <div className='playerArea_imageHolder_title'>Test</div>
            <div className='playerArea_imageHolder_cardHolder'>
              <img className='playerArea_imageHolder_cardImage' src={'../../assets/SpriteResources/10.png'}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage;

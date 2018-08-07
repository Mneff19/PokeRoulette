import React, {Component} from 'react';
import {PlayerImage} from '../formFields.js';

class PlayerArea extends Component{

  render(){
    const{playerImgSource, cardImgSource, chip1ImgSource, chip2ImgSource, chip3ImgSource, playerNumber, imageHolderAlign, nameHolderAlign, chipAlign, playerImgAlign, playerName} = this.props;

    {/*this.renderText = function(){
      if(playerNumber == 2 || playerNumber == 4){
        return(
          <svg viewBox="0 0 500 80">
              <linearGradient id={`gr-overlay${playerNumber}`} x1="0" y1="0" x2="100%" y2="100%">
                <stop stopColor="hsla(10, 100%, 50%, 1)" offset="10%"/>
                <stop stopColor="hsla(0, 100%, 50%, 1)" offset="20%"/>
                <stop stopColor="hsla(0, 0%, 0%, 1)" offset="80%"/>
              </linearGradient>
              <text
                    y="50%"
                    x="70%"

                    dy=".35em"
                    className={`gradient-layer${playerNumber}`}>
                {`${playerName}`}
              </text>
            </svg>
        )
    }
    else if(playerNumber == 3 || playerNumber == 1){

      return(
        <svg viewBox="0 0 500 80">
            <linearGradient id={`gr-overlay${playerNumber}`} x1="0" y1="0" x2="100%" y2="100%">
              <stop stopColor="hsla(0, 0%, 0%, 1)" offset="10%"/>
              <stop stopColor="hsla(0, 50%, 50%, 1)" offset="50%"/>
              <stop stopColor="hsla(10, 100%, 50%, 1)" offset="90%"/>
            </linearGradient>
            <text
                  y="50%"

                  dy=".35em"
                  className={`gradient-layer${playerNumber}`}>
              {`${playerName}`}
            </text>
          </svg>
      )
    }
    else{
      return(
        <div>Player 1</div>
      )
    }
  }.bind(this);*/}

    return(

      <div className={`mainpage_container_${playerNumber}`}>
        <div className='playerArea'>
          <div className={`playerArea_imageHolder ${imageHolderAlign}`}>
            <PlayerImage
            type='file'
            playerID = {`${playerNumber}`}
            imageUrl = {`${playerImgSource}`}
            additionalClass={`${playerImgAlign}`}
            />
            <div className='cardImage'>
            < img className = 'cardImage_image'
            src = {`${cardImgSource}`}
            />
            </div>
          </div>
          <div className={`playerArea_nameHolder`} id={`player${playerNumber}Name`}>
            <div className={`playerArea_nameHolder_name  ${nameHolderAlign}`}>
              {`${playerName}`}
            </div>

            <div className={`chipArea ${chipAlign}`}>
              <div className={`chip ${chipAlign}`}>
                <img  id={`p${playerNumber}Chip1`} src={`${chip1ImgSource}`}/>
              </div>
              <div className={`chip ${chipAlign}`}>
                <img  id={`p${playerNumber}Chip2`} src={`${chip2ImgSource}`}/>
              </div>
              <div className={`chip ${chipAlign}`}>
                <img  id={`p${playerNumber}Chip3`} src={`${chip3ImgSource}`}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayerArea;

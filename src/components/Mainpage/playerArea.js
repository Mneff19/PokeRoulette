import React, {Component} from 'react';
import {PlayerImage} from '../formFields.js';

class PlayerArea extends Component{

  render(){
    const{playerImgSource, cardImgSource, chip1ImgSource, chip2ImgSource, chip3ImgSource, playerNumber, imageHolderAlign, nameHolderAlign, chipAlign, playerImgAlign} = this.props;

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
            < img className = 'cardImage'
            src = {`${cardImgSource}`}
            />
          </div>
          <div className={`playerArea_nameHolder`} id={`player${playerNumber}Name`}>
            <div className={`playerArea_nameHolder_name  ${nameHolderAlign}`}>Test</div>

            <div className={`chipArea ${chipAlign}`}>
              <div className={`chip ${chipAlign}`}>
                <img  id={`p${playerNumber}Chip1`} src={`${chip1ImgSource}`}/>
                <button>Roll</button>
              </div>
              <div className={`chip ${chipAlign}`}>
                <img  id={`p${playerNumber}Chip2`} src={`${chip2ImgSource}`}/>
                <button>Roll</button>
              </div>
              <div className={`chip ${chipAlign}`}>
                <img  id={`p${playerNumber}Chip3`} src={`${chip3ImgSource}`}/>
                <button>Roll</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayerArea;

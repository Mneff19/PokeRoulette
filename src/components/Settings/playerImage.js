import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../../actions";

class PlayerImage extends Component {

  constructor(props) {
    super(props);

    this.id = this.props.playerID;

    this.state = {
      replaceable: true
    }

  }


  handleSelectedImage = function(event) {
    let image = document.getElementById(`player-${this.id}-image`);
    image.src = URL.createObjectURL(event.target.files[0]);
    this.props.StorePlayerImage(`player-${this.id}-image`, this.id);
  }.bind(this);

  render() {

    
    return(
      <div>
        <img
            id={`player-${this.id}-image`}
            className='playerImage'
            src= 'https://fillmurray.com/500/500'
          />
          <input
            className='form-image__replace'
            type='button'
            value='Replace'
            onClick={
              () => document.getElementById(`file${this.id}`) ? document.getElementById(`file${this.id}`).click() : ''
            }
          />
          <input
            className='form-image__replace'
            type='button'
            value='Update'
            onClick={
              () => this.props.RetrievePlayerImage(`player-${this.id}-image`, this.id)
            }
          />
          <input
            type='file'
            style={{display: 'none'}}
            id={`file${this.id}`}
            accepts='image/*'
            value={undefined}
            onChange={this.handleSelectedImage}
          />
      </div>
    )

    
  }
}

PlayerImage = connect(null, actions)(PlayerImage);

export default PlayerImage;

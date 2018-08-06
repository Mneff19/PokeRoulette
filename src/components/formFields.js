import React, {Component} from 'react';

export class PlayerImage extends Component {

  constructor(props) {
    super(props);

    this.id = this.props.playerID

    this.handleSelectedImage = this.handleSelectedImage.bind(this);
  }

  handleSelectedImage = function(event) {
    let image = document.getElementById(`player-${this.id}-image`);
    image.src = URL.createObjectURL(event.target.files[0]);
  }

  render() {
    const {input, imageUrl} = this.props;
    return (
      <div className={`playerImageWrapper ${this.props.additionalClass}`}>
        <img
          id={`player-${this.id}-image`}
          className='playerImage'
          src={imageUrl}
        />
        <input
          className='form-image__replace'
          type='button'
          value='Replace'
          onClick={
            () => document.getElementById(`file${this.id}`) ? document.getElementById(`file${this.id}`).click() : ''
          }
        />
        <input {...input}
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

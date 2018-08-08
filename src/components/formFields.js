import React, { Component } from 'react';
import history from '../history';

export class FormInput extends Component {
    render() {
        const { className, title, input, type, placeholder,id,state} = this.props;
        return (
            <div className={`${className} form-input`} id={`setupInput${id}Wrapper`}>
                <label className='form-input__title'>{title}</label>
                <input
                  autoComplete='off'
                  className='form-input__input'
                  type={type}
                  {...input}
                  placeholder={placeholder}
                  value={state}
                  id={`setupButton${id}`}
                />
            </div>
        )
    }
}

export class FormSelect extends Component {
    render() {
        const { className, title, input, type, onClick, id,state } = this.props;
        return (
            <div className={`${className} form-select`} id={`setupSelect${id}Wrapper`}>
                <select
                    {...input}
                    onClick={onClick}
                    id={`setupSelect${id}`}
                    value={state}
                >
                <option id="default">Chip Color</option>
                <option id="blue">Blue</option>
                <option id="red">Red</option>
                <option id="green">Green</option>
                <option id="purple">Purple</option>
                </select>
            </div>
        )
    }
}

export class FormButton extends Component {
    render() {
        const { className, title, input, type, small, danger, onClick, id } = this.props;
        return (
            <div className={`${className} ${small ? 'form-button-small' : 'form-button'}`}>
                <button
                    className={`
                      ${small ? 'form-button-small' : 'form-button'}__button
                      ${danger ? 'form-button-small__danger' : ''}
                      `}
                    type={type}
                    {...input}
                    id={`setupSubmit${id}`}
                    onClick={onClick}
                >
                {title}
                </button>
            </div>
        )
    }
}

export class FormImage extends Component {

  constructor(props){
    super(props);

    this.id = this.props.id;

    this.handleSelectedImage = this.handleSelectedImage.bind(this);
  }

  handleSelectedImage = function(event) {
    let image = document.getElementById(`setupImage${this.id}`);
    image.src = URL.createObjectURL(event.target.files[0]);
  }

  render() {
    const {className, title, input, imageUrl} = this.props;

    return (
      <div className={`${className} form-image`}>
        <label className='form-image__title'>{title}</label>
        <img
          id={`setupImage${this.id}`}
          className='form-image__image'
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

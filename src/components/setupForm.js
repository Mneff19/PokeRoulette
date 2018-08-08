import React, {Component} from 'react';
import { reduxForm, Field } from "redux-form";
import history from '../history';

import { FormInput, FormButton, FormImage, FormSelect} from "./formFields";

class SetupForm extends Component {

  render() {
    return (
     <form onSubmit={this.props.handleSubmit} className="setupForm">
       <Field
         className={`setupForm_playerSettingName player${this.props.playerNumber}Name`}
         placeholder={"Player Name"}
         name="title"
         type="text"
         title={`Player ${this.props.playerNumber} Name`}
         id={this.props.playerNumber}
         component={FormInput}
       />
       <Field
        className={`setupForm_playerChipColor player${this.props.playerNumber}ChipColor`}
        id={this.props.playerNumber}
        component={FormSelect}
        />
       <Field
         className={`setupForm_playerImage player${this.props.playerNumber}Image`}
         name='image'
         type='file'
         title='Player Image'
         id={this.props.playerNumber}
         component={FormImage}
       />
       <Field
       className='setupForm_submit'
       name='submit'
       type='submit'
       title='Submit'
       id={this.props.playerNumber}
       onClick={()=>{history.push("./roulette")}}
       component={FormButton}
       />
     </form>
   )
  }
}

SetupForm = reduxForm({
  form: "setup"
})(SetupForm);

export default SetupForm;

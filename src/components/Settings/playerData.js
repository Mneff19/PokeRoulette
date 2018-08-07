import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class PlayerData extends Component {

    render() {
        const {handleSubmit, playerID} = this.props;

        return(
            <form onSubmit={handleSubmit} className='player-data'>

            <Field/>

            </form>
        )
    }
}
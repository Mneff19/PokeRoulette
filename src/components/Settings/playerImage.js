import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../../actions";

class PlayerImage extends Component {

  constructor(props) {
    super(props);

    this.props.SwitchActive(this.props.Players, id='3');


  }

  render() {
    return(
      <div></div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

PlayerImage = connect(mapStateToProps, actions)(PlayerImage);

export default PlayerImage;

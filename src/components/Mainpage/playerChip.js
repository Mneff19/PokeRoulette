import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Chip extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rolling: false
        }
    }

    handleClick = function(playerID, numberID) {
        this.setState({rolling: true}, function () {
            console.log(this.state.rolling);
        });

        this.props.rollPokemon(playerID, numberID);

        setTimeout(()=>{this.setState({rolling: false})}, 3000);

    }.bind(this)

    render() {
        const {playerID, numberID, color, pokemonID} = this.props;
        
        if(this.state.rolling){ 
            return(
                <div className={`chip chip-${numberID}${playerID % 2 ? '_reverse' : ''}`}>
                    <img 
                    className='chip-image glowing-chip' 
                    src={require(`../../assets/Chips/${color}.png`)}
                    />
                    <img
                        id={`player${playerID}-chip${numberID}`}
                        className="test"
                        src = 'http://fillmurray.com/60/60'
                    />
                </div>
            )
        } else {
            return(
                <div className={`chip chip-${numberID}${playerID % 2 ? '_reverse' : ''}`}>
                    <img className='chip-image' src={require(`../../assets/Chips/${color}.png`)}/>
                    <img
                        id={`player${playerID}-chip${numberID}`}
                        className="test"
                        src = {require(`../../assets/SpriteResources/${pokemonID}.png`)}
                    />
                    <a onClick={() => this.handleClick(playerID, numberID)}></a>
                </div>
            )
        }
    }
}


export default connect(null, actions)(Chip);

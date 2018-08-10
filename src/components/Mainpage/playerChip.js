import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Chip extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rolling: false,
            currentImage: 1
        }
    }

    handleClick = function(playerID, numberID) {
        this.setState({rolling: true}, function () {
            this.shuffleImage();
        });

        this.props.rollPokemon(playerID, numberID);

        setTimeout(()=>{this.setState({rolling: false}, () => {clearInterval(this.intervalID)})}, 4000);

    }.bind(this)

    getRandomID = function() {
        const min = 1;
        const max = 151;
        return Math.floor(Math.random() * (max - min)) + min;
    }

    shuffleImage = function() {
        this.intervalID = setInterval(
            () => {this.setState({currentImage: this.getRandomID()})}, 150)
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
                        src = {
                            require(`../../assets/SpriteResources/${this.state.currentImage}.png`)
                        }
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

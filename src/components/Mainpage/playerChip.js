import React, {Component} from 'react';
import {connect} from 'react-redux';

class Chip extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {playerID, numberID, color, pokemonID} = this.props;
        return(
            <div className={`chip chip-${numberID}${playerID % 2 ? '_reverse' : ''}`}>
                <img className='chip-image' src={require(`../../assets/Chips/${color}.png`)}/>
                <img  
                    id={`player${playerID}-chip${numberID}`} 
                    className="test" 
                    src={require(`../../assets/SpriteResources/${pokemonID}.png`)}
                />
                <a></a>
            </div>
        )
    }
}


export default Chip;
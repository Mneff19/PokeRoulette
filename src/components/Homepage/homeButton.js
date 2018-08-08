import React, {Component} from 'react';
import history from '../../history';

class HomeButton extends Component {

    hoverOn = function() {
        console.log('Hovering');
        const image = document.getElementById('Test');
        image.src = require(`../../assets/Button-Active.png`);
    }
    hoverOff = function() {
        console.log('Hovering Off');
        const image = document.getElementById('Test');
        image.src = require(`../../assets/Button.png`);
    }

    render() {
        return(
            <div className='mainButton'>
                <a onClick={()=>{history.push('/settings')}}className='button-link' onMouseEnter={() => this.hoverOn()} onMouseLeave={()=> this.hoverOff()}>
                    <img
                        id='Test'
                        className = "button-image"
                        src = {require(`../../assets/Button.png`)}
                        alt = "Wheel 1"
                    />
                    <div className='button-text'>
                        To The Game...
                    </div>
                </a>
            </div>
        )
    }
}

export default HomeButton;

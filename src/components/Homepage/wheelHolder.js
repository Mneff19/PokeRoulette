import React, {Component} from 'react';

class RouletteWheel extends Component {

    constructor() {
        super();

        const wheels = [
            'Flame', 'Electric',
            'Water', 'Psychic'
        ];

        this.innerWheels = this.shuffleArray(wheels);
    }

    shuffleArray = function(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }


    render() {
        return (
            <div className='roulette-wheel'>
                <img 
                    className = "roulette-wheel_inner-wheel"
                    src = {require(`../../assets/${this.innerWheels[0]}.png`)}
                    alt = "Wheel 1" 
                />

                <img
                    className="roulette-wheel_inner-wheel"
                    src={require(`../../assets/${this.innerWheels[1]}.png`)}
                    alt="Wheel 2"
                />

                <img
                    className="roulette-wheel_inner-wheel"
                    src={require(`../../assets/${this.innerWheels[2]}.png`)}
                    alt="Wheel 3"
                />

                <img
                    className="roulette-wheel_inner-wheel"
                    src={require(`../../assets/${this.innerWheels[3]}.png`)}
                    alt="Wheel 4"
                />
            </div>
        )
    }
}

export default RouletteWheel;

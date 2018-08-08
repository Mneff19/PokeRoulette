import {
    FETCH_PLAYER_DATA,
    GET_RANDOM_POKEMON
} from './types';

import axios from 'axios';
import {ROOT_URL} from '../config';

export function fetchPlayerData() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/players/data`)

            .then(response => {
                dispatch({
                    type: FETCH_PLAYER_DATA,
                    payload: response.data
                })
            })

            .catch(err => {
                console.log(err);
            })
    }
}


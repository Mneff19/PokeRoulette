import {
    FETCH_PLAYER_DATA,
    GET_RANDOM_POKEMON,
    FETCH_POKEMON_DATA
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

export function rollPokemon(playerID, slotID) {
  var formData = new FormData();
  formData.append('playerID', playerID);
  formData.append('slotID', slotID);

  return function(dispatch) {
    console.log(playerID);
    axios.post(`${ROOT_URL}/roll`, formData)

      .then(response => {
        console.log(response)
        dispatch({
          type: GET_RANDOM_POKEMON,
          payload: response.data
        })
      })
  }
}

export function fetchPokemonData() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/players/data/pokemon`)

      .then(response => {
        dispatch({
          type: FETCH_POKEMON_DATA,
          payload: response.data
        })
      })
  }
}

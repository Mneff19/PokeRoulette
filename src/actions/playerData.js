import {
    FETCH_PLAYER_DATA,
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

export function fetchPokemonData() {
  console.log('Starting Fetch');
  return function(dispatch) {
    axios.get(`${ROOT_URL}/players/data/pokemon`)

      .then(response => {
        dispatch({
          type: FETCH_POKEMON_DATA,
          payload: response.data
        })
        console.log('Fetch Complete');
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function wipePlayerData() {
  return function() {
    axios.post(`${ROOT_URL}/players/clear`)

      .then(() => {
        console.log('Cleared Player Data');
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
  return async function (dispatch) {
    //roll the data and wait for the response
    let result = await axios.post(`${ROOT_URL}/roll`, formData)
    dispatch({
      type: FETCH_POKEMON_DATA,
      payload: result.data
    }) 
  }
}

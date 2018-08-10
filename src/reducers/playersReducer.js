import {
  FETCH_PLAYER_DATA,
  FETCH_POKEMON_DATA
} from '../actions/types';

const INITIAL_STATE = [
    {
      id: '1',
      name: 'Player 1',
      imageUrl: null,
      pokemon1: 1,
      pokemon2: 1,
      pokemon3: 1,
      card: null,
      color: 'orange'
    },
    {
      id: '2',
      name: 'Player 2',
      imageUrl: null,
      pokemon1: 1,
      pokemon2: 1,
      pokemon3: 1,
      card: null,
      color: 'orange'
    },
    {
      id: '3',
      name: 'Player 3',
      imageUrl: null,
      pokemon1: 1,
      pokemon2: 1,
      pokemon3: 1,
      card: null,
      color: 'orange'
    },
    {
      id: '4',
      name: 'Player 4',
      imageUrl: null,
      pokemon1: 1,
      pokemon2: 1,
      pokemon3: 1,
      card: null,
      color: 'orange'
    },


]

export default function(state=INITIAL_STATE, action) {

  switch(action.type) {

    case FETCH_PLAYER_DATA:
      const playerData = action.payload;
      return{
        ...state,
        ...playerData
      }
      case FETCH_POKEMON_DATA:
        const pokemonData = action.payload;
        Object.entries(state).map((player, index) => {
          Object.assign(player[1], pokemonData[index]);
        })
        return{
          ...state
        }

    default: return state;
  }
}

const INITIAL_STATE = [
    {
      id: '1',
      image: null,
      active: false
    },
    {
      id: '2',
      image: null,
      active: false
    },
    {
      id: '3',
      image: null,
      active: false
    },
    {
      id: '4',
      image: null,
      active: false
    }

]

export default function(state=INITIAL_STATE, action) {

  switch(action.type) {

    case 'SELECT_BY_ID':
      const PlayerID = action.payload;
      var SelectedPlayer = {};
      console.log(state);
      state.map(player => {
        if(PlayerID == player.id) {
          SelectedPlayer = player;
        }
      })
      return {
        ...state,
        SelectedPlayer
      }

    case 'SwitchActive':
      const {active} = action.payload;


    default: return state;
  }
}

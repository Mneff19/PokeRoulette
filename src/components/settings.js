import React, {Component} from 'react';

import SetupForm from './setupForm';

class Setup extends Component{
  render(){
    return(
      <div className='setupContainer BG'>
      <SetupForm
        playerNumber={1}
      />
      <SetupForm
        playerNumber={2}
      />
      <SetupForm
        playerNumber={3}
      />
      <SetupForm
        playerNumber={4}
      />
      </div>
    )
  }
}

export default Setup;

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import Players from './playersReducer';

const rootReducer = combineReducers({
  form,
  Players
});

export default rootReducer;

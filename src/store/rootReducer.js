import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import message from '../reducers/message';

let rootReducer = combineReducers({
  routing,
  message
});

export default rootReducer;

import { combineReducers } from 'redux';
// import multireducer from 'multireducer';
import { routerStateReducer } from 'redux-router';

import auth from './auth';
import questions from './questions';
import answers from './answers';
import matrix from './matrix';

export default combineReducers({
  router: routerStateReducer,
  auth,
  questions,
  answers,
  matrix
});

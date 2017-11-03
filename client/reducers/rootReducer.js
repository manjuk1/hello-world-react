import {combineReducers} from 'redux';  
import catReducer from './catReducer';

const rootReducer = combineReducers({  
  // short hand property names
  //cats
  cats: catReducer
})

export default rootReducer;  
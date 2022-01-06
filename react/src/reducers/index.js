import { combineReducers } from 'redux';
import tinyReducer from './tinyReducer';
export default combineReducers({
    item:tinyReducer
});
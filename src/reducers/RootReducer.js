//@flow
import {combineReducers} from 'redux';
import appReducer from "../features/app/reducers/AppReducer";

const RootReducer = combineReducers({
  appReducer
});
export default RootReducer;

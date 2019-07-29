import { combineReducers } from 'redux';
import ColorMapReducer from './ColorMapReducer';
import OtherReducer from './OtherReducer';

export default combineReducers({
    colors: ColorMapReducer,
});
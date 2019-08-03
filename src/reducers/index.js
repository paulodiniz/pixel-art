import { combineReducers } from 'redux';
import GridReducer from './GridReducer';
import SelectedColorReducer from './SelectedColorReducer';

export default combineReducers({
    grid: GridReducer,
    selectedColor: SelectedColorReducer,
});
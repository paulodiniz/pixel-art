import { combineReducers } from 'redux';
import GridReducer from './GridReducer';
import SelectedColorReducer from './SelectedColorReducer';
import ColorsToPickReducer from './ColorsToPickReducer';

export default combineReducers({
    grid: GridReducer,
    selectedColor: SelectedColorReducer,
    colorsToPick: ColorsToPickReducer,
});
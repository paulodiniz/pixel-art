import { combineReducers } from 'redux';
import GridReducer from './GridReducer';
import SelectedColorReducer from './SelectedColorReducer';
import ColorsToPickReducer from './ColorsToPickReducer';
import MouseEventReducer from './MouseEventReducer';

export default combineReducers({
    grid: GridReducer,
    selectedColor: SelectedColorReducer,
    colorsToPick: ColorsToPickReducer,
    buttonPressed: MouseEventReducer,
});
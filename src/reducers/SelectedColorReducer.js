const initialSelectedColor = 'BLUE';
export default (state = initialSelectedColor, action) => {
    switch(action.type) {
        case 'CHANGE_SELECTED_COLOR':
            return action.payload.color;
        default:
            return state;
    }
}
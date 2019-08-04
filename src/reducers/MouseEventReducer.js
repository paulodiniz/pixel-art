const initialState = false;

export default (state = initialState, action) => {
    switch(action.type) {
        case 'MOUSE_DOWN':
            return true;
        case 'MOUSE_UP':
            return false;
        default:
            return state;
    }
}
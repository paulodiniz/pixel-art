const NUM_LINES = 20;
const NUM_COLS  = 20;

let colors = [];
for(var i = 0; i < NUM_LINES * NUM_COLS; i++) {
    colors.push('red');
}
const initialState = colors;

export default (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_COLOR':
            const index = action.payload.index;

            const start = state.slice(0, index)
            const end   = state.slice(index + 1, state.length - 1)

            return start.concat('blue').concat(end);
        default:
            return state;
    }
}
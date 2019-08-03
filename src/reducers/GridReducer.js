const NUM_LINES = 5;
const NUM_COLS  = 5;
const INITIAL_COLOR = 'RED';

let colors = [];
for(var i = 0; i < NUM_LINES * NUM_COLS; i++) {
    colors.push(INITIAL_COLOR);
}
const initialState = {
    colors: colors,
    numLines: NUM_LINES,
    numCols: NUM_COLS
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_COLOR':
            const { index, selectedColor } = action.payload;
            const colors = state.colors

            const start = colors.slice(0, index);
            const end   = colors.slice(index + 1, colors.length);

            const newColors = start.concat(selectedColor).concat(end);

            return {
                numLines: NUM_LINES,
                numCols: NUM_COLS,
                colors: newColors,
            };

        default:
            return state;
    }
}
import React from 'react';
import CellContainer from './CellContainer';

const NUM_LINES = 20;
const NUM_COLS  = 20;

let colors = [];
for(var i = 0; i < NUM_LINES * NUM_COLS; i++) {
    colors.push([i, 'red']);
}

const width = 100 / NUM_COLS;
const colorMap = new Map(colors);

const GridContainer = () => {
    return(
        <div className="grid-container cell">
            {[...colorMap.keys()].map((index) => <CellContainer index={index} width={width} key={index}/>)}
        </div>
    );
};

export default GridContainer;
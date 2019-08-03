import React from 'react';
import CellContainer from '../containers/CellContainer';

const GridComponent = ({numLines, numCols, colors, width}) => {
    return(
        <div className="grid-container cell">
            {colors.map((color, index) => <CellContainer index={index} width={width} key={index} />)}
        </div>
    );
}

export default GridComponent;
import React from 'react';
import { connect } from 'react-redux';
import CellContainer from './CellContainer';

const GridContainer = ({colors, numCols}) => {
    const width = 100/numCols;
    return(
        <div className="grid-container cell">
            {colors.map((color, index) => <CellContainer index={index} width={width} key={index} />)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        colors: state.grid.colors,
        numCols: state.grid.numCols,
    }
}

export default connect(mapStateToProps)(GridContainer);
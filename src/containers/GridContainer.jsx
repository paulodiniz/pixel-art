import React from 'react';
import { connect } from 'react-redux';
import CellContainer from './CellContainer';
import { mouseDown, mouseUp } from '../actions';

const GridContainer = ({colors, numCols, dispatchMouseUp, dispatchMouseDown}) => {
    const width = 100/numCols;

    return(
        <div className="grid-container cell" 
            onMouseUp={dispatchMouseUp}
            onMouseDown={dispatchMouseDown}
        >
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

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchMouseUp: () => dispatch(mouseUp()),
        dispatchMouseDown: () => dispatch(mouseDown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
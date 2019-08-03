import React from 'react';
import { connect } from 'react-redux';
import GridComponent from '../components/GridComponent';

const GridContainer = ({colors, numLines, numCols}) => {
    const width = 100/numCols;
    return(
        <GridComponent numLines={numLines} numCols={numCols} colors={colors} width={width}/>
    );
};

const mapStateToProps = (state) => {
    return {
        colors: state.grid.colors,
        numLines: state.grid.numLines,
        numCols: state.grid.numCols,
    }
}

export default connect(mapStateToProps)(GridContainer);
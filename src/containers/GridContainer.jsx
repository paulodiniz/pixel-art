import React from 'react';
import { connect } from 'react-redux';
import CellContainer from './CellContainer';

const NUM_LINES = 20;
const NUM_COLS  = 20;

const width = 100 / NUM_COLS;

const GridContainer = ({colors}) => {
    return(
        <div className="grid-container cell">
            {colors.map((color, index) => <CellContainer index={index} width={width} key={index} />)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        colors: state.colors
    }
}

export default connect(mapStateToProps)(GridContainer);
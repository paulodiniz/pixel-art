import React from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../actions';

const CellContainer = ({index, color, width, selectedColor, dispatchColor}) => {
    let cellStyle = {
        width: width + '%',
        paddingBottom: width + '%',
        backgroundColor: color,
    }

    return(
        <div style={cellStyle} onClick={() => dispatchColor(index, selectedColor)}/> 
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        color: state.grid.colors[ownProps.index],
        selectedColor: state.selectedColor
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchColor: (index, selectedColor) => dispatch(changeColor(index, selectedColor))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CellContainer);
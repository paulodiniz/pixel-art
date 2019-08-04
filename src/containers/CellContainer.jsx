import React from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../actions';

const CellContainer = ({index, color, width, selectedColor, dispatchColor, buttonPressed}) => {
    let cellStyle = {
        width: width + '%',
        paddingBottom: width + '%',
        backgroundColor: color,
    }

    const mouseOver = () => {
        if(buttonPressed) {
            dispatchColor(index, selectedColor);
        }
    }

    const mouseDown = () => {
        dispatchColor(index, selectedColor);
    }

    return(
        <div 
            style={cellStyle} 
            onMouseDown={mouseDown}
            onMouseOver={mouseOver}>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        color: state.grid.colors[ownProps.index],
        selectedColor: state.selectedColor,
        buttonPressed: state.buttonPressed,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchColor: (index, selectedColor) => dispatch(changeColor(index, selectedColor))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CellContainer);
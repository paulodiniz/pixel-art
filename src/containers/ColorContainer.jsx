import React from 'react';
import {connect } from 'react-redux'
import { changeSelectedColor } from '../actions';

const ColorContainer = ({color, dispatchChangeSelectedColor}) => {
    const style = {
        backgroundColor: color,
    }
    return (
        <div style={style} className="color-picker-cell" onClick={() => dispatchChangeSelectedColor(color)}/>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchChangeSelectedColor: (selectedColor) => dispatch(changeSelectedColor(selectedColor))
    }
}

export default connect(null, mapDispatchToProps)(ColorContainer);
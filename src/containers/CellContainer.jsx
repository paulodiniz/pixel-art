import React from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../actions';

const CellContainer = ({index, color, width, dispatchColor}) => {
    let cellStyle = {
        width: width + '%',
        paddingBottom: width + '%',
        backgroundColor: color,
    }

    return(
        <div style={cellStyle} onClick={() => dispatchColor(index)}/> 
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        color: state.colors[ownProps.index]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchColor: (index) => dispatch(changeColor(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CellContainer);
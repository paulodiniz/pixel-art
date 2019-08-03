import React from 'react';
import { connect } from 'react-redux';
import ColorContainer from './ColorContainer';

const mapStateToProps = (state) => {
    return {
        colorsToPick: state.colorsToPick
    }
};

const ColorPicker = ({colorsToPick}) => (
    colorsToPick.map(color => <ColorContainer color={color} key={color} />)
)

export default connect(mapStateToProps)(ColorPicker);
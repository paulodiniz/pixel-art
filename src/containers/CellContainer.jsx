import React, { useState } from 'react';

const CellContainer = ({index, width}) => {
    const [color, setColor] = useState('red');

    let cellStyle = {
        width: width + '%',
        paddingBottom: width + '%',
        backgroundColor: color,
    }

    const changeColor = () => {
        const randomColor = '#' + (Math.random().toString(16) + "000000").substring(2,8);
        setColor(randomColor);
    }

    return(
        <div style={cellStyle} onClick={changeColor}/> 
    );
}

export default CellContainer;
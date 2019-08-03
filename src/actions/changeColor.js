const changeColor = (index, selectedColor) => {
    return {
        type: 'CHANGE_COLOR',
        payload: {
            index: index,
            selectedColor: selectedColor,
        }
    }
}

export default changeColor;
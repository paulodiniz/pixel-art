const changeSelectedColor = (color) => {
    return {
        type: 'CHANGE_SELECTED_COLOR',
        payload: {
            color: color,
        }
    }
}

export default changeSelectedColor;
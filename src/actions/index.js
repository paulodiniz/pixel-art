export const changeColor = (index) => {
    return {
        type: 'CHANGE_COLOR',
        payload: {
            index: index,
        }
    }
}
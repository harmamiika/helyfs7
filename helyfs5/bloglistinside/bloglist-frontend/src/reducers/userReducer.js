
export const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOG_IN_USER':
            return action.payload
        case 'SET_USER_FROM_STORAGE':
            return action.payload
        case 'LOG_OUT_USER':
            return null
        default:
            return state
    }
}
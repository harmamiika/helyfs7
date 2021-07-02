const INTIAL_STATE = {
    message: null,
    type: null
}

export const notificationReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case 'DISPLAY_NOTIFICATION':
            return { ...state, message: action.payload.message, type: action.payload.type }
        case 'SET_NOTIFICATION_NULL':
            return { ...state, message: null, type: null }
        default:
            return state
    } 
}
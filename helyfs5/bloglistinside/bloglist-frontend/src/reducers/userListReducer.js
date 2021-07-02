export const userListReducer = (state = [], action) => {
    console.log(state, 'state')
    console.log(action, 'action')
    switch (action.type) {
        case 'GET_ALL_USERS':
            return action.payload
        default:
            return state
    }
}
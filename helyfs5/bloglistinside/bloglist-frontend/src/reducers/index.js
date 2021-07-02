import { combineReducers } from "redux"

import { notificationReducer } from "./notificationReducer"
import { blogsReducer } from './blogsReducer'
import { userReducer } from './userReducer'
import { userListReducer } from './userListReducer'

const reducers = combineReducers({
    userList: userListReducer,
    user: userReducer,
    notification: notificationReducer,
    blogs: blogsReducer
})

export default reducers
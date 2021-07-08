import blogsService from "../services/blogs"
import loginService from "../services/login"
import usersService from "../services/users"

// User data
export const getAllUsers = () => async dispatch => {
    const allUsers = await usersService.getAll().catch(e => console.log(e))
    dispatch({
        type: 'GET_ALL_USERS',
        payload: allUsers
    })
}



// Login
export const loginUser = (username, password) => async dispatch => {
    const user = await loginService.login({
        username, password
    })
    console.log(user, 'user pre')
    user.token = blogsService.setToken(user.token)
    console.log(user, 'user after')
    window.localStorage.setItem(
        'loggedInUser', JSON.stringify(user)
    )

    dispatch({
        type: 'LOG_IN_USER',
        payload: user
    })
}

export const setUserFromStorage = (user) => {
    return {
        type: 'SET_USER_FROM_STORAGE',
        payload: user
    }
}

export const logoutUser = () => {
    window.localStorage.removeItem('loggedInUser')
    return {
        type: 'LOG_OUT_USER'
    }
}


// Blogs
export const getAllBlogs = () => async dispatch => {
    const allBlogs = await blogsService.getAll().catch(e => console.log(e, 'e'))
    console.log(allBlogs, 'allBlogs')
    dispatch({
        type: 'GET_ALL_BLOGS',
        payload: allBlogs
    })
}

export const createBlog = (newBlog) => async dispatch => {
    const res = await blogsService.create(newBlog).catch((e) => console.log(e, 'create error'))
    console.log(res, 'res')
    dispatch({
        type: 'CREATE_A_BLOG',
        payload: res
    })
}

export const deleteBlog = (id) => async dispatch => {
    const response = await blogsService.remove(id).catch(e => console.log(e), 'remove error')
    console.log(response, 'response')
    dispatch({
        type: 'DELETE_A_BLOG',
        payload: id
    })
}

// IRL mongoose $inc operator to avoid bugs
export const likeBlog = (blog) => async dispatch => {
    console.log(blog.id, blog, 'blog id blog')
    const response = await blogsService.update(blog.id, blog).catch(e => console.log(e), 'like error')
    console.log(response, 'data')
    dispatch({
        type: 'LIKE_A_BLOG',
        payload: response
    })
}

// comment
export const addBlogComment = (id, comment) => async dispatch => {
    console.log(id, comment, 'id comment')
    const response = await blogsService.addComment(id, comment).catch(e => console.log(e, 'addcomment error'))
    console.log(response, 'data')
    dispatch({
        type: 'ADD_BLOG_COMMENT',
        payload: response
    })
}



let notificationTimeout

export const displayNotification = (message, type = 'success') => async dispatch => {
    if (notificationTimeout) {
        clearTimeout(notificationTimeout)
        notificationTimeout = null
    }
    notificationTimeout = setTimeout(() => {
        dispatch(setNullNotification())
    }, 5000)

    const messageWithType = { message, type }
    dispatch({
        type: 'DISPLAY_NOTIFICATION',
        payload: messageWithType
    })
}

//purity?
export const setNullNotification = () => {
    return {
        type: 'SET_NOTIFICATION_NULL'
    }
}
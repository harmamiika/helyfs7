

export const blogsReducer = (state = [], action) => {
    console.log(state, 'state')
    console.log(action, 'action')

    switch (action.type) {
        case 'GET_ALL_BLOGS':
            console.log(action.payload, 'payload')
            return action.payload
        case 'CREATE_A_BLOG':
            return state.concat(action.payload)
        case 'DELETE_A_BLOG':
            return state.filter(blog => blog.id !== action.payload)
        case 'LIKE_A_BLOG':
            return state.map(blog => blog.id === action.payload.id ? { ...blog, ...action.payload } : blog)
        case 'ADD_BLOG_COMMENT':
            return state.map(blog => blog.id === action.payload.blog ? { ...blog, comments: blog.comments.concat(action.payload) } : blog)
        default:
            return state
    }
}
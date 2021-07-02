import React from 'react'

const ShowUser = ({ userToShow }) => {
    console.log(userToShow)

    const renderBlogs = () => {
        return userToShow.blogs.map(blog => {
            return (
                <div>
                    {blog.title}
                </div>
            )
        })
    }

    if (!userToShow) {
        return null
    }
    return (
        <div>
            <h2>{userToShow.name}</h2>
            <h3>Blogs</h3>
            {renderBlogs()}
        </div>
    )
}

export default ShowUser
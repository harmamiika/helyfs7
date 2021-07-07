import React from 'react'
import { Link } from 'react-router-dom'

const ShowUser = ({ userToShow }) => {
    console.log(userToShow)

    const style = {
        color: 'darkblue'
    }

    const renderBlogs = () => {
        return userToShow.blogs.map(blog => {
            return (
                <div key={blog.id}>
                    <Link style={style} to={`/blogs/${blog.id}`}>
                        {blog.title}
                    </Link>
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
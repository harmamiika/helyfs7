import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import Blog from './Blog'
import { likeBlog, logoutUser } from '../actions'

const BlogList = ({ user }) => {
    const [showComponent, setShowComponent] = useState(true)
    const blogs = useSelector(state => state.blogs)
    const dispatch = useDispatch()

    if (!user) {
        return null
    }

    const handleShowClick = () => {
        setShowComponent(!showComponent)
    }

    const handleLike = (blog, likes) => {
        const updatedBlog = { ...blog, likes }
        dispatch(likeBlog(updatedBlog))
    }

    const renderContent = () => {
        if (showComponent) {
            return (
                <div>
                    {
                        blogs.sort((a, b) => b.likes - a.likes).map(blog =>
                            <Blog key={blog.id} blog={blog} blogs={blogs}
                                onLike={(likes) => handleLike(blog, likes)} />
                        )
                    }
                </div>
            )
        }
    }


    return (
        <div>
            <h2>Bloglist</h2>
            <ListGroup>
                {renderContent()}
            </ListGroup>
            <Button variant='secondary' onClick={handleShowClick}>{showComponent ? 'hide blogs' : 'show blogs'}</Button>
        </div>
    )
}

export default BlogList

// window.localStorage.removeItem('loggedNoteappUser')
// tai local storagen tilan kokonaan nollaavan komennon
// window.localStorage.clear()
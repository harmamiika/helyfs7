import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteBlog, displayNotification } from '../actions'

const Blog = ({ blog, onLike = () => { } }) => {
  const [showDetail, setShowDetail] = useState(false)
  const dispatch = useDispatch()

  const handleLikeClick = () => {
    onLike(blog.likes + 1)
    dispatch(displayNotification(`liked blog: ${blog.title}`))
  }

  const handleDeleteClick = async () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      const notificationInfo = { title: blog.title, author: blog.author, id: blog.id }

      dispatch(deleteBlog(blog.id))
      dispatch(displayNotification(`deleted blog: ${notificationInfo.title} by ${notificationInfo.author}`, 'error'))
    }
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const renderRemoveButton = () => {
    if (!blog.user) {
      return null
    }
    if (blog.user.username === JSON.parse(window.localStorage.getItem('loggedInUser')).username) {
      return (
        <div>
          <button id={`${blog.title} remove`} onClick={handleDeleteClick}>remove</button>
        </div>
      )
    }
    return null
  }

  const renderDetail = () => {
    if (showDetail) {
      return (
        <div>

          <div>{blog.url}</div>
          <div>likes: {blog.likes}</div>
          <button onClick={handleLikeClick}>like</button>
          <br />
          {blog.user?.username}
          {/* huom syntaksi ^ */}
          {renderRemoveButton()}
        </div>
      )
    }
    return null
  }

  return (
    <div style={blogStyle}>
      <div><Link to={`/blogs/${blog.id}`}>{blog.title}</Link> {blog.author}
        <button id={blog.title} onClick={() => setShowDetail(!showDetail)}>{!showDetail ? 'view' : 'hide'}</button></div>
      {renderDetail()}
    </div>
  )
}

export default Blog
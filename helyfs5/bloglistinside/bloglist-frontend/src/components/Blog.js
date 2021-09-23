import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import { useSelector } from 'react-redux'

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

  const blogTitleStyle = {
    paddingRight: 10
  }

  const renderRemoveButton = () => {
    if (!blog.user) {
      return null
    }
    if (blog.user.username === JSON.parse(window.localStorage.getItem('loggedInUser')).username) {
      return (
        <div>
          <Button variant='danger' id={`${blog.title} remove`} onClick={handleDeleteClick}>remove</Button>
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
          <Button variant='success' onClick={handleLikeClick}>like</Button>
          <br />
          Added by: {blog.user.username}
          {/* huom syntaksi ^ */}
          {renderRemoveButton()}
        </div>
      )
    }
    return null
  }

  return (
    <ListGroup.Item>
      <div><Link style={blogTitleStyle} to={`/blogs/${blog.id}`}>{blog.title}</Link>
        <Button variant='light' id={blog.title} onClick={() => setShowDetail(!showDetail)}>{!showDetail ? 'view' : 'hide'}</Button></div>
      {renderDetail()}
    </ListGroup.Item>
  )
}

export default Blog
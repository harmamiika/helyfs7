import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Login from './Login'
import BlogList from './BlogList'
import CreateBlog from './CreateBlog'
import Notification from './Notification'
import Header from './Header'
import ShowUsers from './ShowUsers'
import { displayNotification, getAllBlogs, createBlog, setUserFromStorage, getAllUsers } from '../actions'
import ShowUser from './ShowUser'
import ShowBlog from './ShowBlog'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const userList = useSelector(state => state.userList)
  const blogsList = useSelector(state => state.blogs)

  useEffect(() => {
    dispatch(getAllBlogs()).catch(e => console.log(e, 'cant get blogs'))
  }, [])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUserFromStorage(user))
    }
  }, [])

  const onCreate = async (newBlog) => {
    dispatch(createBlog(newBlog))
    dispatch(displayNotification(`a new blog: ${newBlog.title} by ${newBlog.author} added`, 'success'))
  }

  let match = useRouteMatch('/users/:id')
  const userToShow = match
    ? userList.find(user => user.id.toString() === match.params.id.toString())
    : null

  match = useRouteMatch('/blogs/:id')
  const blogToShow = match
    ? blogsList.find(blog => blog.id.toString() === match.params.id.toString())
    : null


  if (user === null) {
    return (
      <Container>
        <Notification />
        <Login />
      </Container>
    )
  }

  return (
    <div>
      <Header />
      <Notification />
      <Container>


        <Switch>

          <Route path='/users/:id'>
            <ShowUser userToShow={userToShow} />
          </Route>

          <Route path='/users'>
            <ShowUsers />
          </Route>

          <Route path='/blogs/:id'>
            <ShowBlog blogToShow={blogToShow} />
          </Route>

          <Route path='/'>
            <BlogList user={user} />
            <CreateBlog onCreate={onCreate} />
          </Route>

        </Switch>
      </Container>
    </div>
  )
}

export default App


  // const displayContent = () => {
  //   return user === null ?
  //     <Login /> :
  //     <div>
  //       <Header />
  //       <BlogList user={user} />
  //       <CreateBlog onCreate={onCreate} />
  //     </div>
  // }
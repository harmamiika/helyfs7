import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Switch, Route, useRouteMatch } from 'react-router-dom'

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
  // const blogsList = useSelector(state => state.blogs)

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


  // const displayContent = () => {
  //   return user === null ?
  //     <Login /> :
  //     <div>
  //       <Header />
  //       <BlogList user={user} />
  //       <CreateBlog onCreate={onCreate} />
  //     </div>
  // }

  const match = useRouteMatch('/users/:id')
  const userToShow = match
    ? userList.find(user => user.id.toString() === match.params.id.toString())
    : null

  // const match2 = useRouteMatch('/blogs/:id')
  // const blogToShow = match2
  //   ? blogsList.find(blog => blog.id.toString() === match2.params.id.toString())
  //   : null

  if (user === null) {
    return (
      <div>
        <Notification />
        <Login />
      </div>
    )
  }

  return (
    <div>
      <div>
        <Header />
        <Notification />

        <Switch>

          <Route path='/users/:id'>
            <ShowUser userToShow={userToShow} />
          </Route>

          <Route path='/users'>
            <ShowUsers />
          </Route>


          <Route path='/'>
            <BlogList user={user} />
            <CreateBlog onCreate={onCreate} />
          </Route>

        </Switch>
      </div>
    </div>
  )
}

{/* <Route path='/blogs/:id'>
<ShowBlog blogToShow={blogToShow} />
</Route> */}


export default App
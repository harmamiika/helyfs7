import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'


const ShowUsers = () => {
    const userList = useSelector(state => state.userList)

    console.log(userList, 'userlist')


    const renderUsers = () => {
        if (!userList) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
        return userList.map(user => {
            return (
                <ListGroup.Item key={user.id}>
                    <Link to={`/users/${user.id}`}>
                        {user.name}
                    </Link>
                    <div>
                        Blogs: {user.blogs.length}
                    </div>
                </ListGroup.Item>
            )
        })
    }

    return (
        <div>
            <h2>Users</h2>
            <ListGroup>
                {renderUsers()}
            </ListGroup>
        </div>
    )
}

export default ShowUsers
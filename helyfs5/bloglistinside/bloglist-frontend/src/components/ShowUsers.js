import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const ShowUsers = () => {
    const userList = useSelector(state => state.userList)

    console.log(userList, 'userlist')


    const renderUsers = () => {
        if (!userList) {
            return null
        }
        return userList.map(user => {
            return (
                <div key={user.id}>
                    <Link to={`/users/${user.id}`}>
                        {user.name}
                    </Link>
                    <div>
                        Blogs: {user.blogs.length}
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <h2>Users</h2>
            {renderUsers()}
        </div>
    )
}

export default ShowUsers
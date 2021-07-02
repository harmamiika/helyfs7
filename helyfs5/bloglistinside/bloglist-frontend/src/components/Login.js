import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { displayNotification, loginUser } from '../actions'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()


    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('logging in with', username, password)

        try {
            dispatch(loginUser(username, password))
            dispatch(displayNotification(`Welcome back ${username}!`, 'success'))

            setUsername('')
            setPassword('')
        } catch (exception) {
            console.log(exception)
            dispatch(displayNotification('Invalid username or password', 'error'))
        }
    }

    return (
        <div>
            <h2>Log in to application</h2>
            <form onSubmit={handleLogin}>
                <div>
                    username
                    <input
                        onChange={({ target }) => setUsername(target.value)}
                        type='text' value={username} name='Username' />
                </div>
                <div>
                    password
                    <input
                        onChange={({ target }) => setPassword(target.value)}
                        type='password' value={password} name='password' />
                </div>
                <button type='submit'>log in</button>
            </form>
        </div>
    )
}

export default Login
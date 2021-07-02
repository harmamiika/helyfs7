import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'



const Header = () => {
    const user = useSelector(state => state.user)

    const onLogoutClick = () => {
        dispatch(logoutUser())
    }

    const padding = {
        padding: 5
    }

    return (
        <div>
            <Link style={padding} to='/'>home</Link>
            <Link style={padding} to='/users'>users</Link>
            <div>            <p>
                {`${user.name} logged in.`}
                <button onClick={onLogoutClick} >
                    log out
                </button>
            </p></div>
        </div>
    )
}

export default Header
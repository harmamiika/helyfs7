import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import { logoutUser } from '../actions'
import { grey } from 'jest-matcher-utils/node_modules/chalk'


const Header = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const onLogoutClick = () => {
        dispatch(logoutUser())
    }

    const padding = {
        padding: 5,
    }

    return (
        <Navbar bg='light' expand='lg' sticky='top'>
            <Navbar.Brand>
                <Link style={padding} to='/'>Bloglist-app</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse>
                <Nav className='mr-auto'>
                    <Nav.Item>
                        <Link style={padding} to='/'>home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link style={padding} to='/users'>users</Link>
                    </Nav.Item>
                </Nav>
                <Nav.Item className='ml-auto'>
                    <div>
                        {`${user.name} logged in.`}
                        <Button variant='danger' onClick={onLogoutClick} >
                            log out
                        </Button>
                    </div>
                </Nav.Item>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
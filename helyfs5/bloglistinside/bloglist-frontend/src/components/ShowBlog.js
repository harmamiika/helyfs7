import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ShowBlog = ({ blogToShow }) => {
    console.log(blogToShow, 'blogtoshow')

    const titleStyle = {
        alignontent: 'center'
    }

    if (!blogToShow) {
        return null
    }
    return (
        <Card>
            <Card.Body>
                <Card.Title style={titleStyle}><h2>{blogToShow.title}</h2></Card.Title>
                <Card.Text><a href={`${blogToShow.url}`}>{blogToShow.url}</a></Card.Text>
                <Card.Text>Likes: {blogToShow.likes}</Card.Text>
                <Card.Text>Author: {blogToShow.author}</Card.Text>
                <Link to='/'><Button variant='light'>Back to Bloglist</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default ShowBlog
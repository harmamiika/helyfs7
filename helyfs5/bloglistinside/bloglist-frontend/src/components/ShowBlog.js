import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import ShowBlogComments from './ShowBlogComments'

const ShowBlog = ({ blogToShow }) => {
    console.log(blogToShow, 'blogtoshow')

    const titleStyle = {
        alignContent: 'center'
    }

    const spinnerStyle = {
        justifyContent: 'center'
    }

    if (!blogToShow) {
        return <Spinner style={spinnerStyle} animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    }
    return (
        <Card>
            <Card.Body>
                <Card.Title style={titleStyle}><h2>{blogToShow.title}</h2></Card.Title>
                <Card.Text><a href={`${blogToShow.url}`}>{blogToShow.url}</a></Card.Text>
                <Card.Text>Likes: {blogToShow.likes}</Card.Text>
                <Card.Text>Author: {blogToShow.author}</Card.Text>

                <ShowBlogComments id={blogToShow.id} comments={blogToShow.comments} />

                <Link to='/'><Button variant='light'>Back to Bloglist</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default ShowBlog
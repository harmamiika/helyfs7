import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import ShowBlogComments from './ShowBlogComments'

const ShowBlog = ({ blogToShow }) => {

    // console.log(blogToShowPasser, 'blogtoshowpasser')

    // const blogToShow = useSelector(state => state.blogs.find(blog => blog.id === blogToShowPasser?.id)

    // console.log(blogToShow, 'blogtoshow')

    const titleStyle = {
        alignContent: 'center'
    }

    const spinnerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    if (!blogToShow) {
        return (
            <div style={spinnerStyle}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        )
    }
    return (
        <Card>
            <Card.Body>
                <Card.Title style={titleStyle}><h2>{blogToShow.title}</h2></Card.Title>
                <Card.Text><a href={`${blogToShow.url}`} target='_blank'>{blogToShow.url}</a></Card.Text>
                <Card.Text>Likes: {blogToShow.likes}</Card.Text>
                <Card.Text>Author: {blogToShow.author}</Card.Text>

                <ShowBlogComments id={blogToShow.id} comments={blogToShow.comments} />

                <Link to='/'><Button variant='light'>Back to Bloglist</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default ShowBlog
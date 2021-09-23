import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { addBlogComment } from '../actions'

const ShowBlogComments = ({ id, comments }) => {
    const [content, setContent] = useState('')
    const dispatch = useDispatch()

    console.log(comments, 'comments')


    const handleCommentSubmit = (event) => {
        event.preventDefault()

        try {
            dispatch(addBlogComment(id, { content }))
            setContent('')
        } catch {
            console.log(e, 'errrororor')
        }
    }




    const renderAddComment = () => {
        return <div>
            <Form onSubmit={handleCommentSubmit}>
                <Form.Label>
                    <h3>Add comment:</h3>
                </Form.Label>
                <Form.Control
                    type='text' value={content} name='content'
                    onChange={({ target }) => setContent(target.value)}
                />
                <Button variant='primary' type='submit'>Add comment</Button>
            </Form>
        </div>
    }

    const renderComments = () => {
        if (comments.length === 0) {
            return null
        }
        return comments.map(comment => {
            return (
                <div key={comment.id}>{comment.content}</div>
            )
        })
    }

    return (
        <div>
            <h3>Comments:</h3>
            {renderComments()}
            {renderAddComment()}
        </div>
    )
}


export default ShowBlogComments
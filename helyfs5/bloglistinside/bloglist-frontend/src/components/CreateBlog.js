import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

const CreateBlog = ({ onCreate }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [showComponent, setShowComponent] = useState(false)

    //Send form
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const createdBlog = { title, author, url }

        onCreate(createdBlog)

        setTitle('')
        setAuthor('')
        setUrl('')
        setShowComponent(!showComponent)
    }

    const componentPadding = {
        paddingTop: '10px'
    }


    const renderForm = () => {
        if (showComponent) {
            return (
                <div>
                    <h2>create new</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div>title: <input id='title' type='text' name='title' value={title}
                            onChange={({ target }) => setTitle(target.value)} ></input></div>
                        <div>author: <input id='author' type='text' name='author' value={author}
                            onChange={({ target }) => setAuthor(target.value)} ></input></div>
                        <div>url: <input type='text' name='url' value={url}
                            onChange={({ target }) => setUrl(target.value)} ></input></div>
                        <button variant='primary' >create</button>
                    </form>
                </div>
            )
        }
    }

    return (
        <div style={componentPadding}>
            <div>
                {renderForm()}
            </div>
            <Button variant='secondary' onClick={() => setShowComponent(!showComponent)}>{showComponent ? 'cancel' : 'create blog'}</Button>
        </div>
    )
}

export default CreateBlog
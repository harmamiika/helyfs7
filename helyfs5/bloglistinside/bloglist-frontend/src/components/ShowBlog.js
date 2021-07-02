import React from 'react'

const ShowBlog = ({ blogToShow }) => {
    console.log(blogToShow, 'blogtoshow')
    if (!blogToShow) {
        return null
    }
    return (
        <div>
            <h1>{blogToShow}</h1>
        </div>
    )
}

export default ShowBlog
import React from 'react'

const ShowBlog = ({ blogToShow }) => {
    console.log(blogToShow, 'blogtoshow')
    if (!blogToShow) {
        return null
    }
    return (
        <div>
            <h1>{blogToShow.title}</h1>
            <div>{blogToShow.url}</div>
            <div>Likes: {blogToShow.likes}</div>
            <div>Made by: {blogToShow.author}</div>
        </div>
    )
}

export default ShowBlog
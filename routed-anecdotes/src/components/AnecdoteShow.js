import React from 'react'

// import { useParams } from 'react-router-dom'

const AnecdoteShow = ({ anecdote }) => {
    // const id = useParams().id
    //huom tämä react router way

    // const anecdote = anecdotes.find(a => a.id === id)

    return (
        <div>
            <h2>{anecdote.content}</h2>
            <div>
                has {anecdote.votes} votes
            </div>
        </div>
    )
}

export default AnecdoteShow
import React, { useState } from 'react'

import { Switch, Route, useRouteMatch } from 'react-router-dom'

import About from './About'
import AnecdoteList from './AnecdoteList'
import AnecdoteShow from './AnecdoteShow'
import CreateNew from './CreateNew'
import Footer from './Footer'
import Menu from './Menu'
import Notification from './Notification'


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const [notification, setNotification] = useState('')

  const notifyWith = (message, type='success') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    notifyWith(`Created ${anecdote.content}`)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const match = useRouteMatch('/anecdotes/:id')
  const anecdote = match
    ? anecdotes.find(anecdote => anecdote.id.toString() === match.params.id.toString())
    : null

  return (
      <div>
        <Notification notification={notification} />
        <h1>Software anecdotes</h1>
        <Menu />

        <Switch>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/create'>
            <CreateNew addNew={addNew} />
          </Route>

          <Route path='/anecdotes/:id' > 
            <AnecdoteShow anecdote={anecdote} />
          </Route>

          <Route path='/'>
            <AnecdoteList anecdotes={anecdotes} />
          </Route>

        </Switch>

        <Footer />
      </div>
  )
}

export default App;
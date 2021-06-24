import React, { useState } from "react"
import { useHistory } from "react-router"

import { useField } from '../hooks'

const CreateNew = (props) => {
    // const [content, setContent] = useState('')
    // const [author, setAuthor] = useState('')
    // const [info, setInfo] = useState('')

    // ==============================>

    const contentField = useField('contentField')
    const authorField = useField('author')
    const urlInfoField = useField('info')
    
    const history = useHistory()

    const onResetClick = (e) => {
        e.preventDefault()
        contentField.onReset()
        authorField.onReset()
        urlInfoField.onReset()
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content: contentField.value,
        author: authorField.value,
        info: urlInfoField.value,
        votes: 0
      })
      history.push('/')
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input { ...contentField } />
          </div>
          <div>
            author
            <input { ...authorField } />
          </div>
          <div>
            url for more info
            <input name={urlInfoField.type} value={urlInfoField.value} onChange={urlInfoField.onChange} />
          </div>
          <button>create</button><button onClick={onResetClick}>reset</button>
        </form>
      </div>
    )
  
  }

export default CreateNew
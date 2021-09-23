import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useCountry, useField } from './hooks'

import Country from './Country'


const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const dataFetch = useCountry(name)

  const fetch = (e) => {
    console.log(nameInput)
    e.preventDefault()
    setName(nameInput.value)
    console.log(dataFetch, '123123')
    setCountry(dataFetch.data.[0])
    console.log(country, 'eyy')
  }
  
  console.log(dataFetch, 'adsads')

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App

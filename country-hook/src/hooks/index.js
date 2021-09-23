import { useState, useEffect } from "react";
import countriesService from '../services/countries'

export const useCountry = (queryCountry) => {
    const [country, setCountry] = useState(null)

    useEffect(() => {
        console.log(queryCountry, 'qcountry')
        let returnedCountry = null

        countriesService.getCountry(queryCountry).then(returnedCountry => setCountry(returnedCountry))
        console.log(returnedCountry, 'RETURNED')
        

    }, [queryCountry])

    console.log(country, 'country')

    return {
        country
    }
}

export const useField = (type) => {
    const [value, setValue] = useState('')
  
    const onChange = (event) => {
      setValue(event.target.value)
    }
  
    return {
      type,
      value,
      onChange
    }
  }
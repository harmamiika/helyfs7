import axios from "axios"



const getCountry = async (countryName) => {

    const baseUrl = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
    const country = await axios.get(baseUrl).catch(e => console.log(e))
    console.log(country)
    return country
}

export default { getCountry }
import React from 'react'
import axios from 'axios'
const GoogleSearch = async (term) => {
    const { data } = await axios.get('https://www.googleapis.com/customsearch/v1', {
        params: {
            key: 'AIzaSyBQ72pXlrnGYxzcu0pjRK1CCd7qucUUECw',
            cx: '3aed1aa0b210a3e03',
            q: term
        }
    })
    return data
}

export default GoogleSearch

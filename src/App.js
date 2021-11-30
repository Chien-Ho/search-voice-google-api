import React, { useState } from 'react'
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './component/Home'
import Search from './component/Search'
import GoogleSearch from './api/GoogleSearch';
function App(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState({});

  let navigate = useNavigate();

  const setSearch = async (term) => {
    setSearchTerm(term)
    console.log(searchTerm);
    await setData(term)
    navigate('/search')
  }
  const setData = async (term) => {
    const data = await GoogleSearch(term)
    setSearchData(data)
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Home setSearch={setSearch} />}>
        </Route>
        <Route path='/search' element={
          <Search searchTerm={searchTerm}
            searchData={searchData}
            setSearch={setSearch} />}>
        </Route>
      </Routes>
    </>
  )
}

export default App;

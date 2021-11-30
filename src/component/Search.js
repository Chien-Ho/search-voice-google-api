import React from 'react'
import NavbarSearch from './NavbarSearch'
import NavbarSubSearch from './NavbarSubSearch'
import SearchPage from './SearchPage'
const Search = ({ searchTerm, searchData, setSearch }) => {
    return (
        <div>
            <NavbarSearch searchTerm={searchTerm} setSearch={setSearch} />
            <NavbarSubSearch />
            <SearchPage searchData={searchData} />
        </div>
    )
}

export default Search

import React from 'react'
import "./SearchBar.css"
import SearchInput from './SearchInput'
import SearchBtn from './SearchBtn'
import Option from './Option'
import ResetBtn from './ResetBtn'
export default function SearchBar() {
    return (
        <div className="searchbar">
            <div className="search-bar-col-first">
                <SearchInput />
            </div>
            <div className="search-bar-col-second">
                <Option />
                <Option />
                <Option />
                <Option />
                <Option />
                <Option />
            </div>
            <div className="search-bar-col-third">
                <SearchBtn />
                <ResetBtn />
            </div>
        </div>
    )
}

import React from 'react'

function SearchInputs(props) {
    return(
        <div>
            SearchInputs.js
            <label htmlFor="rep_senator">Search for:</label>
            <input id="rep_senator" type="radio" />
            <label htmlFor="state">State:</label>
            <input id="state" type="text" />
        </div>
    )
}

export default SearchInputs


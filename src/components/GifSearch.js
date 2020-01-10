import React from 'react'

const GifSearch = (props) => {
    return  (
        <form>
            <label>Search for any Gif!</label>
    <input type='text' onChange={props.fillInput}></input>
    <button onClick={props.getValueFetch} value={props.searchValue}>Search</button>
    </form>
    )
}

export default GifSearch
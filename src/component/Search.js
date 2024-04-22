import React from "react";

function Search({handleChange}){
    return (
        <input placeholder="Search Movie..." className="search-movie" onChange={handleChange}></input>
    )
}
export default Search
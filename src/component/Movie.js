import React from "react";

function Movie({movie}){
    return (
        <div className="movie-container">
            <h1>{movie.title}</h1>
            <img src={movie.medium_cover_image}></img>
            <p>{movie.summary}</p>
            <h2>{movie.genres.join(' ')}</h2>
        </div>
    )
}
export default Movie
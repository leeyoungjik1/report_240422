import React from "react";
import './MovieList.css'
import { useParams, useSearchParams } from 'react-router-dom'
import Search from "../component/Search";
import Movie from "../component/Movie";
import QueryNavLink from "../component/QueryNavLink";


function MovieList({movies}){
    const [searchParams, setSearchParams] = useSearchParams()
    const searchMovies = (e) => {
        const filter = e.target.value
        if(filter){
            setSearchParams({filter})
        }else{
            setSearchParams({})
        }
    }
    const moviesFiltered = movies && movies
    .filter(movie => {
        const filter = searchParams.get('filter')
        if(!filter) return true
        const title = movie.title.toLowerCase()
        return title.includes(filter.toLowerCase())
    })

    const params = useParams()
    const movie = movies && movies
    .find(movie => movie.id === Number(params.movieId))

    return (
        <>
            <Search handleChange={searchMovies}/>
            {movie ? <Movie movie={movie}/> : <h1>MOVIE PAGE</h1>}
            {moviesFiltered && moviesFiltered.map((movie, id) => {
                return (
                    <QueryNavLink 
                        key={id}
                        to={`/movie/${movie.id}`}
                        className={({isActive}) => 
                            isActive ? "movie-title active" : "movie-title"
                        }
                    >
                        {movie.title}
                    </QueryNavLink>
                )
            })}
        </>
    )
}
export default MovieList
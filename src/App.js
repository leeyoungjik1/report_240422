import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Home, About, MovieList, NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'
import Button from './component/Button'
import Sidebar from './component/Sidebar'
import Menu from './component/Menu'

const menus = [
  {name: 'HOME', url: '/'},
  {name: 'ABOUT', url: '/about'},
  {name: 'MOVIE', url: '/movie'}
]

function App() {
  const [open, setOpen] = useState()
  const [movies, setMovies] = useState()
  const showMenus = () => {
    setOpen(!open)
  }
  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?limit=10')
    .then(list => list.json())
    .then(list => {
      const {data: {movies}} = list
      setMovies(movies)
    })
  }, [])
  return (
    <div className="App">
      <Button handleClick={showMenus}>Menu</Button>
      <Sidebar open={open}>
        <Menu menus={menus}></Menu>
      </Sidebar>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/movie' element={<MovieList movies={movies}/>}>
          <Route path=':movieId' element={<MovieList/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;

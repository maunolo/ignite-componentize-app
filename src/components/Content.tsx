import React from 'react'
import { MovieCard } from './MovieCard'

import { GenreResponseProps, MovieProps } from '../types'
interface ContentProps {
  selectedGenre: GenreResponseProps
  movies: MovieProps[]
}

export function Content({ selectedGenre, movies }: ContentProps): JSX.Element {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}
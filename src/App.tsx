import { useState, useEffect } from 'react'
import './App.css'
import {Movie} from './models'
import wretch  from 'wretch'

function getMovies(): Promise<{movies: Movie[], total: number}> {
  return wretch('/movies').get().json();
}

function App() {
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies().then(movies => {
      setMovies(movies.movies)
    })
  }, [])

  return (
    <div>
      {
        movies.map(v => {
          return (
            <li key={v.id}>
              {v.title}
            </li>
          )
        })
      }
    </div>
  )
}

export default App

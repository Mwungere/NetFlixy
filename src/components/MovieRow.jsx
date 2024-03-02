import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results)
    })
  }, [url])
  console.log(movies);
  return (
    <>
      <h2 className=' font-nsans-bold md:text-xl p-4 capitalize'>{title}</h2>
    </>
  )
}

export default MovieRow
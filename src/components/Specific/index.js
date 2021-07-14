import {Component} from 'react'

import Top from '../Navbar'

const apiKey = 'e202605be51fda15275be801c94fd004'

class SpecificMovie extends Component {
  searchMovies = async () => {
    let newData
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.results.map(result => ({
        backdropPath: result.backdrop_path,
        originalTitle: result.original_title || result.original_name,
        posterPath: result.poster_path,
        id: result.id,
      }))
      newData = updatedData
    }
    return newData
  }

  render() {
    const searchMoviesData = this.searchMovies
    console.log(searchMoviesData)
    return (
      <div className="bg">
        <Top />
        <img
          src={`https://image.tmdb.org/t/p/original/${searchMoviesData.backdropPath}`}
          alt="specific poster"
        />
        <p>.</p>
      </div>
    )
  }
}

export default SpecificMovie

import {Component} from 'react'
import './index.css'

import Top from '../Navbar'

const apiKey = 'e202605be51fda15275be801c94fd004'

class SpecificMovie extends Component {
  state = {movieData: []}

  componentDidMount() {
    this.searchMovies()
  }

  searchMovies = async () => {
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
      console.log(data)
      const updatedData = {
        backdropPath: `${data.backdrop_path}`,
        originalTitle: `${data.original_title}` || `${data.original_name}`,
        posterPath: `${data.poster_path}`,
        id: `${data.id}`,
      }

      this.setState({movieData: updatedData})
    }
  }

  render() {
    const {movieData} = this.state

    const {backdropPath} = movieData
    return (
      <div className="bg-container">
        <div
          className="img-bg"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdropPath})`,
          }}
        >
          <Top />
          <h1>hid</h1>
        </div>
      </div>
    )
  }
}

export default SpecificMovie

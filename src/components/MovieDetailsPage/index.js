import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CastCard from '../CastCard'

import './index.css'

const API = "https://api.themoviedb.org/3/movie/"

const API_KEY = "?api_key=b8e9bcb7dd64c5e3f9d21e9508ee0f7f&language=en-US"

const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    const [castDetails, setCastDetails] = useState([]);

    // console.log(castDetails);
    const {id} = useParams();
    
    const MOVIE_DETAILS_API = API + id + API_KEY

    const CAST_DETAILS_API = API + id + "/credits" + API_KEY

    const API_IMG = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        fetch(MOVIE_DETAILS_API)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setMovieDetails(data);
          });
      }, );
    
      useEffect(() => {
        fetch(CAST_DETAILS_API)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data.cast);
            setCastDetails(data.cast);
          });
      }, );
    
      const filtered_cast = castDetails.filter(eachCastDetails => (
        eachCastDetails.profile_path !== null
      ))

  return (
    <div className='movie-details'>
        <div className='movie-details-main-container'>
            <div className='movie-poster-heading-overview-container'>
                <div className='movie-poster-heading-container'>
                    <img src={API_IMG + movieDetails.poster_path} alt={movieDetails.title} className='poster-image'/>
                    <div className='movie-details-container'>
                        <h1 className='heading'>{movieDetails.title}</h1>
                        <p className='paragraph'>Rating: {movieDetails.vote_average}</p>
                        <p className='paragraph'>Release Date: {movieDetails.release_date}</p>
                    </div>
                </div>
                <div className='movie-overview-container'>
                    <h1 className='heading'>Overview</h1>
                    <p className='paragraph'>{movieDetails.overview}</p>
                </div>
            </div>
            <div className='movie-backdrop-container'>
                <img src={API_IMG + movieDetails.backdrop_path} alt={movieDetails.title}  className='backdrop_image'/>
            </div>
        </div>
        <div className='cast-main-container'>
            <h1 className='cast-heading'>Cast</h1>
            <div className='casts-container'>
            {
                filtered_cast.map(eachCastDetails => (
                    <CastCard key={eachCastDetails.id}  castDetails={eachCastDetails} />
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default MovieDetailsPage
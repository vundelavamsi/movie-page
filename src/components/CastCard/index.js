import React from 'react'
import './index.css'

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const CastCard = (props) => {
    const {castDetails} = props
    const {profile_path, name,character} = castDetails;
    // console.log(profile_path);
    return (
    <div className='cast-container'>
        <img src={API_IMG + profile_path} alt={name} className='cast-profile-image' /> 
        <p className='para'>{name}</p>
        <p className='para'>{character}</p>
    </div>
  )
}

export default CastCard
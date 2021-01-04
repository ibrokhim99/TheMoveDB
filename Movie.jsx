import React, { useEffect, useState } from 'react';
const API_IMG = "https://image.tmdb.org/t/p/w500/"

const API_GENRE = "https://api.themoviedb.org/3/genre/movie/list?api_key=1e6610ba5ce4192259b6a5fe460b978b&language=en-US"
const setVoteClass= (vote)=>{
    if(vote >= 8){
        return 'green'
    }else if(vote >=6){
        return'orange'
    }else{
        return'red'
}
}


const Movie = ({title, poster_path, overview,vote_average})=>(



    <div className="movie">
        <img src={API_IMG + poster_path} alt={title } />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>
        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
            <h3>Genre</h3>
            <p></p>
        </div>
    
    </div>
)
export default Movie;
//

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Movie from "./Movie"
const API_KEY = "1e6610ba5ce4192259b6a5fe460b978b";
const  API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1e6610ba5ce4192259b6a5fe460b978b&language=en-US&page=1"
const API_GENRE = "https://api.themoviedb.org/3/genre/movie/list?api_key=1e6610ba5ce4192259b6a5fe460b978b&language=en-US"
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=1e6610ba5ce4192259b6a5fe460b978b&query="


function App(){
    const [movies, setMovies] = useState([]);
    const[searchTerm,setSearchTerm] = useState("");
    
   
    const getApi = (API) =>{
        fetch(API).then((res) =>res.json()).then(data =>{
            console.log(data)
            setMovies(data.results)
        })
    }
    
    useEffect(()=>{
        getApi(API_URL)
    },[])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
       if(searchTerm){
           getApi(API_SEARCH+searchTerm)
           setSearchTerm('')
    }
    }

    const handleChange = (e)=>{
        setSearchTerm(e.target.value)
    }
    return(<>
          <header>
              <form onSubmit={handleSubmit}>
                <input 
                type="search" 
                className="search" 
                placeholder="i.e SpiderMen" 
                value={searchTerm}
                onChange={handleChange}
                />

              </form>
        </header>
         <div className="movie-container">
        {movies.length>0 && movies.map(movie=>(
            <Movie key={movie.id}   {...movie}/>
        ))}
    </div>
    </>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))
import React,{useState,useEffect} from 'react';
import axios from './axios.js';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url_image="https://image.tmdb.org/t/p/original/";

function Row({title,fetchURL, isLargeRow}) {

    const [movies,setMovies]=useState([]);
    const [trailerURL,setTrailerURL]=useState("");

    useEffect(() => {
        async function fetchData(){

            const request= await axios.get(fetchURL);
            setMovies(request.data.results);
            return request; 
        };
        fetchData();
    }, [fetchURL]);

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };

    const handleClick=(movie)=>{
        if (trailerURL){
            setTrailerURL('');
        }
        else{
            // console.log(movie)
            movieTrailer(movie?.title || movie?.name || movie?.original_title)
            .then(url=>{
                // console.log(url)
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'));
            }).catch((error)=>console.log(error));
         }
    };

    return (
        <div className='row_parent_container'>
            <h2 className='row__title'>{title}</h2>
            <div className='card__container'>
                {movies.map(movie => (
                    <img 
                    key={movie.id} 
                    onClick={()=>handleClick(movie)}
                    className={`card__image ${isLargeRow && "large__card"}`}
                    src={`${base_url_image}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                ))}
            </div>
            {trailerURL && <Youtube videoId={trailerURL} opts={opts}/>}
        </div>
    )
}

export default Row

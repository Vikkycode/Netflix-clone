import React,{useState,useEffect} from 'react'
import axios from '../axios'
import  '../components/row.css'
// import YouTube from 'react-youtube'
// import movieTrailer from 'movie-trailer'



let base_url= "https://image.tmdb.org/t/p/original/"

const Row=({title,fetchUrl,isLargeRow,isPaddingBottom})=>{
    const [movies,setMovies] = useState([]);
    // const [trailerUrl,setTrailerUrl] = useState("")

    // to eliminate side-effect or run after render
    useEffect(()=>{
      const fetchData= async ()=>{
            try {
                let request = await axios.get(fetchUrl);
             setMovies(request.data.results)
             return request; 
            } catch (error) {
               console.log(error) 
            }
        }
        fetchData()
    },[fetchUrl])

    // const opts ={
    //   height:"390",
    //   width:"100%",
    //   playerVars:{
    //     autoplay:1,
    //   },
    // }

    // const handleClick = (movie)=>{
    //   if(trailerUrl){
    //     setTrailerUrl("")
    //   }else{
    //     movieTrailer(null,{tmdbId:movie.id})
    //     .then(url =>{
    //       console.log("url is " + url)
    //       const urlParams = new URLSearchParams(new URL(url).search)
    //       console.log("urlParamsn"+urlParams)
    //       setTrailerUrl(urlParams.get("v"))
    //     })
    //     .catch(error =>{
    //       console.log(error)
    //     })
    //   }
    // }
  return (
    <div className='row'>
         <h2>{title}</h2>
        <div className='row__posters'>
        {movies.map(movie => (
            <img 
            key={movie.id} 
        //  onClick={()=> handleClick(movie)}
            src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
            alt={movie.name} 
            className={`row__poster ${isLargeRow && 'row__posterlarge'}
            ${isPaddingBottom && "row__poster--lastPaddingBottom"}`} />
            ))}
        </div>
        {/* { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  )
}

export default Row;
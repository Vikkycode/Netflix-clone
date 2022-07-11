import React,{useState,useEffect} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Autoplay} from 'swiper';
import {useNavigate} from 'react-router-dom';
import axios from '../axios';
import requests from '../requests';
import './banner.css'

const Banner= ()=> {
        let base_url= "https://image.tmdb.org/t/p/original/"
    // SwiperCore.use([Autoplay])
    const navigate = useNavigate()

    const [movie,setMovie]=useState([])

    useEffect(()=>{
    const fetchData = async ()=> {
        let request = await axios.get(requests.fetchNetflixOriginals);
            try {
                setMovie(request.data.results[Math.floor(Math.random()
                * request.data.results.length -1)])
                return request; 
            } catch (error) {
                console.log(error) 
            }}
        fetchData()
},[])
        
    const truncate= (str,n)=>{
        return str?.length > n ? str.substr(0,n-1) + "...": str; 
}
  return (
    
    <header 
    className='banner'
    style={{
    backgroundSize:'cover',
    height:'500px',
    maxWidth:'100%',
    backgroundPosition:'center center',
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}
    >
        
    
    <div className='banner__content'>
        <h1 className='banner__title'>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className='banner__buttons'>
        <button className='banner__btn'>Play</button>
        <button className='banner__btn'
        // onClick={navigate('/movie' + movie.id)}
        >Watch trailer</button>
        </div>
        <p className='banner__description'>
        {truncate(movie?.overview,150)}
        </p>
    </div>
        <div className="banner__fadeBottom"></div>
    </header>
  )
}

export default Banner;
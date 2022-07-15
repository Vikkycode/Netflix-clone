import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import NetflixLogo from '../asses/Netflix-Logo.svg'
import Avatar from '../asses/avatar.png'
import SearchBar from './screen/SearchBar'
import './navbar.css'
// import {getAuth} from 'firebase/auth'
const Navbar =()=>{
    const [show,handShow]=useState(false)
    const navigate = useNavigate()

    // const auth = getAuth()
    const handleScrollY= ()=>{
        if(window.scrollY > 100){
            handShow(true)
        } else handShow(false)        
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',handleScrollY)
        return () =>{
        window.removeEventListener('scroll',handleScrollY)
        }
    },[])
    return (
        <nav className={`navbar ${show && "navbar__black"}`}>
            <img
            onClick={()=> navigate('/home')}
            className='netflix__logo'
            src={NetflixLogo}
            alt="Netflix logo" 
            />
            <img
            onClick={()=> navigate('/logout')}
            className='avatar__logo'
            src={Avatar}
            alt="avatar" 
            />
    </nav>
  )
}

export default Navbar
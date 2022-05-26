import React,{useState,useEffect} from 'react'
import NetflixLogo from '../asses/Netflix-Logo.svg'
import Avatar from '../asses/avatar.png'
import '../components/navbar.css'

const Navbar =()=>{
    const [show,handShow]=useState(false)

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
            className='netflix__logo'
            src={NetflixLogo}
            alt="Netflix logo" 
            />    
            <img
            className='avatar__logo'
            src={Avatar}
            alt="avatar" 
            />
    </nav>
  )
}

export default Navbar
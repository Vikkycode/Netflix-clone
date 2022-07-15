import React,{useState} from 'react'
import netflixlogo from  './Netflix-Logo.svg'
import { useNavigate } from 'react-router-dom'
import './loginScreen.css'
import SignUpScreen from './signUpScreen'

const LoginScreen=()=>{
  const [signIn,setSignIn]=useState(false)
  // const [inactive,setInactive]=useState(false)
  const nav = useNavigate()
  const handleLogin = async ()=>{
    await setSignIn(true)
    nav("/signin")  
  }
  return (
    
    <div className='loginScreen' >
      <div className='loginScreen__gradient'>
        <img 
        className='loginScreen__logo'
        src={netflixlogo} 
        alt='netflix logo' />
        {/* onClick={()=>setInactive(true)}    */}
      </div>
      <button 
      onClick={()=> handleLogin()}
      className='loginScreen__button'>Sign In</button>
      <div className='loginScreen__body'>
      {signIn ? (
        <SignUpScreen />
      ) : (
        <>
        <h1 className='loginScreen__title'>Unlimited films,TV programmes and more.</h1>
        <h3>Watch anywhere.Cancel at any time.</h3>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        
        <form>
          <input type='email' placeholder='Email address' />
          <button
          // className={`getStarted__btn ${inactive && 'inactive'}`}
          onClick={()=> handleLogin()}       
          >Get Started</button>
        </form>
      </>
      )
    }
    </div>
    </div>
  )
}

export default LoginScreen;
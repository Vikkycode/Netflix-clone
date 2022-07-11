import React,{useRef,useEffect} from 'react'
import { app } from  '../../firebase'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'

import './signUpScreen.css'

const SignUpScreen= ()=>{
    const emailRef = useRef(null)
    const passwordRef= useRef(null)

    
    // useEffect(()=>{
    //     console.log(Object.keys(emailRef).current)
    //     if(emailRef.current != null){
    //         emailRef.current?.focus()
    //     }    
    // },[emailRef])
    const auth = getAuth();
    const register = (e)=>{
        e.preventDefault()
        
        createUserWithEmailAndPassword(auth,
            emailRef.current.value,
            passwordRef.current.value
            ).then(authUser=>{
                console.log(authUser)
            }).catch(error =>{
                alert(error.message)
            })
            
        }
        
    const signIn = (e)=>{
        e.preventDefault()

        signInWithEmailAndPassword(auth,
            emailRef.current.value,
            passwordRef.current.value
            ).then((authUser)=>{
                console.log(authUser)
            }).catch((error)=>{
                alert(error.message)
            })
    }
  return (
    <div className='signUpScreen'>
        <form>
            <h1>Sign In</h1>
              <input ref= {emailRef} type='email' placeholder='Email address' />
              <input ref={passwordRef} type='password' placeholder='Password' />
          <div  className='signUpScreen__button'>
              <button
              type='submit'
              onClick={signIn}
              >Sign in</button>
          </div>
          <div className='signUpScreen__link'>

          <p>New to Netflix?</p>
          <span
          onClick={register}
          >Sign up now</span>
          </div>
        </form>       
    </div>
  )
}

export default SignUpScreen
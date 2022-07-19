import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUpScreen from './components/screen/signUpScreen';
import ProfileScreen from './components/screen/profileScreen';
import HomeScreen from './components/screen/HomeScreen';
import LoginScreen from './components/screen/LoginScreen'

import { useEffect } from 'react';
// import {getAuth,onAuthStateChanged} from 'firebase/auth'
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux'
import {login,logout, selectUser} from './features/user/userSlice';

const App=()=>{
  // const [trailerUrl,setTrailerUrl] = useState("")
  const user =useSelector(selectUser)
  const dispatch = useDispatch()
  // const auth = getAuth()
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //login 
        dispatch(
          login({
            uid:userAuth.uid,
            email:userAuth.email,
          })
        )
      } else{
        // logout 
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])
  return (
    <BrowserRouter>
    {!user ? (
      <LoginScreen />
    ):(
      <Routes>
        <Route path='/logout' element={<ProfileScreen />} />
        <Route path='/signin' element={<SignUpScreen />} />
        <Route path='/' element={<LoginScreen />} />
        <Route path='/home' element={<HomeScreen />} >        
        </Route>
      </Routes>
    )
  }
    </BrowserRouter>
  
  );
}

export default App;

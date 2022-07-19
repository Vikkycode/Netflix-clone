import React from 'react'
import './profileScreen.css'
import Navbar from '../Navbar'
import avatar from '../../asses/avatar.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../features/user/userSlice';
import {auth} from '../../firebase'
// import { useRef } from 'react';
// import { FirebaseError } from 'firebase/app';
// import auth from '../../App'
const ProfileScreen=() =>{
    const user = useSelector(selectUser);
    // const auth = getAuth()Sign Out
    const nav = useNavigate()

    const handleLogout = async ()=>{
      await auth.signOut()
      nav("/")  
    }
  return (
    <div className='profileScreen'>
      <Navbar /> 
        <div className='profileScreen__body'>
        <h2>Sign Out</h2>

        <div className='profileScreen__info'>
            <img src={avatar} alt="avatar" />
            <h5>{user.email}</h5>
            </div>
            <div className='btn'>
            <button
            onClick={() => handleLogout()}
            className="btn-signout"
            >Sign Out</button>
              
              </div>        
    </div>
    </div>
  )
}

export default ProfileScreen
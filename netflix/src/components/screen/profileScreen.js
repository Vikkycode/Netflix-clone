import React from 'react'
import './profileScreen.css'
import Navbar from '../Navbar'
import avatar from '../../asses/avatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import {getAuth} from 'firebase/auth'
// import { useRef } from 'react';
// import { FirebaseError } from 'firebase/app';
import auth from '../../App'
const ProfileScreen=() =>{
    const user = useSelector(selectUser);
    const auth = getAuth()
  return (
    <div className='profileScreen'> 
    <Navbar />
    <div className='profileScreen__body'>
        <h1>Edit in profile</h1>
        <div className='profileScreen__info'>
            <img src={avatar} alt="avatar" />
            <h4>hi {user}</h4>
            <button
            onClick={auth.signOut()}
            >Sign Out</button>
            </div>        
    </div>
    </div>
  )
}

export default ProfileScreen
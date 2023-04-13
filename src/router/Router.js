import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import { onAuthStateChanged } from 'firebase/auth'
import { getUsers } from '../services/getUsers'

const Router = () => {
  const [logged, setLogged] = useState(undefined)
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       getUsers(user.uid)
  //         .then((response) => {
  //           dispatch(loginUser(response, { status: false, message: "" }));
  //           setLogged(true)
  //         })
  //         .catch((error) => {
  //           dispatch(loginUser({}, { status: true, message: error.message }));
            
  //         });
  //     } else {
  //       console.log("No tas");
  //       setLogged(false)
  //       navigate('/signIn')
        
  //     }
  //   });
    
  
    
  // }, [])
  
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router
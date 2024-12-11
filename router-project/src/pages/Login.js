import React from 'react'
import Temp from '../components/Temp'
import loginImg from '../assets/wp4385871.jpg'

const Login=({setIsLoggedIn}) => {
  return (
   <Temp
   title="Welcome Back"
  desc1="Build skills for Future"
  desc2="Education to Future-Proof Your Carrier."
   image={loginImg}
   formtype="login"
   setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default Login
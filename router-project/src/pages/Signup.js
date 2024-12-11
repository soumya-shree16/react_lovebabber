import React from 'react'
import signupImg from "../assets/signup.png"
import Temp from '../components/Temp'


 const  Signup=({setIsLoggedIn})=> {
  return (

    <Temp
   title="Welcome Back"
  desc1="Build skills for Future"
  desc2="Education to Future-Proof Your Carrier."
   image={signupImg}
   formtype="signup"
   setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default Signup
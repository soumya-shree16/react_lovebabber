import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link,useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate= useNavigate();

    const[formData,setFormData]=useState({
        email:"",password:""
    })

    const[showPassword,setShowPassword]=useState(false);

  function changeHandler(event){
     setFormData((prevData) =>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
     ))
  }
function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In")
    navigate("/dashboard")
}

  return (
    
    <form onSubmit={submitHandler}>
        <label>
            <p>Email address<sup>*</sup></p>
            <input
            required
            type='email'
            placeholder='Enter Email id'
            value={formData.email}
            onChange={changeHandler}
            name='email'
            />
        </label>
        <label>
            <p>password<sup>*</sup></p>
            <input
            required
            type={showPassword ? ("text") : ("password")}
            placeholder='Enter password'
            value={formData.password}
            onChange={changeHandler}
            name='password'
            />
            <span onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
            </span>
            <Link to="#">
            <p>Forgot password</p>
            </Link>
            <button>
                Sign In
            </button>
        </label>
    </form>
  )
}

export default LoginForm
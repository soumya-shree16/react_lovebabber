import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import {useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate= useNavigate();

    const[formData,setFormData]=useState({
        firstname:"",lastname:"",email:"",password:"",confirmpassword:""
        
    })

    const[showPassword,setShowPassword]=useState(false);
    const[showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [accountType, setAccountType] = useState("student");

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
        if(formData.password!==formData.confirmpassword){
            toast.error("password donot match")
            return;
        }
        setIsLoggedIn(true)
        toast.success("Account Created");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("printing Final account data ");
        console.log(finalData);

        navigate("/dashboard");
    }
  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
        <form onSubmit={submitHandler}>
            <div>
            <label>
                <p>Enter First Name</p>
                <input
                    required
                    type='text'
                    placeholder='Enter First Name'
                    name='firstname'
                    onChange={changeHandler}
                    value={formData.firstname}
                    />
            </label>
            <label>
                <p>Enter last Name</p>
                <input
                    required
                    type='text'
                    placeholder='Enter last Name'
                    name='lastname'
                    onChange={changeHandler}
                    value={formData.lastname}
                    />
            </label>
            </div>
            <div>
            <label>
                <p>Enter Email id</p>
                <input
                    required
                    type='email'
                    placeholder='Enter Email id'
                    name='email'
                    onChange={changeHandler}
                    value={formData.email}
                    />
            </label>
            </div>
            <div>
            <label>
                <p>Create password</p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    placeholder='Enter password'
                    name='password'
                    onChange={changeHandler}
                    value={formData.password}
                    />
                     <span onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
            </span>
            </label>
            
            <label>
                <p>confirm password</p>
                <input
                    required
                    type='text'
                    placeholder='confirm password'
                    name='confirmpassword'
                    onChange={changeHandler}
                    value={formData.confirmpassword}
                    />
                <span onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
            </span>
            </label>
        </div>
            <button>Create Account</button>
        </form>
    </div>

 
  )
}

export default SignupForm
import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'


 const Temp = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>{desc1}</p>
            <p>{desc2}</p>

      {formtype ==="signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : 
      (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

      <div>
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
      <button>
        <p>Sign Up With Google</p>
      </button>
        </div>
        <div>
            <img src={image}
            alt="students"
            width={558}
            heigth={584}
            loading='lazy'/>
        </div>
    </div>
  )
}

export default Temp
 


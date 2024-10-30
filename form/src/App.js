import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const[firstname,setFirstname]=useState("");
  // const[lastname,setLastname]=useState("");
  

  // console.log(firstname);
  // console.log(lastname);
  
  // function changeFirstHandler(event){
  //   // console.log("print first name");
  //   // console.log(event.target.value);
  //   setFirstname(event.target.value);
  // }
  
  // function changeLastHandler(event){
  //   // console.log("print last name");
  //   // console.log(event.target.value);
  //   setLastname(event.target.value);
  // }

const[formData,setFormData]=useState({ firstname:"", lastname:"", email:"", comment:"", vis:false, mode:"",food:""})


  function changeHandler(event){
    const {name,value,type,checked}=event.target
    setFormData(prevFormData => {
      return{
     ...prevFormData,
     [name]: type === "checkbox" ? checked :value
      }
  }
  );
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("finally print the form with data....");
    console.log(formData);
    
    
  }

  return (
   <div className="flex flex-col items-center">
    <form onSubmit={submitHandler}>
      <h1>React Form</h1>
    <input type="text" placeholder='enter first name'
    onChange={changeHandler}
    name='firstname'
    value={formData.firstname}
    />
    <br></br>
    <br></br>
     <input type="text" placeholder='enter last name'
     onChange={changeHandler}
    name='lastname'
     value={formData.lastname}
     />
     <br></br>
     <br></br>
     <input type="email" placeholder='enter your email'
     onChange={changeHandler}
    name='email'
     value={formData.email}
     />
     <br></br>
     <br></br>
     <textarea
     placeholder='enter email here'
     onChange={changeHandler}
     name='comment'
     value={formData.comment}
     />
     <br></br>
     <br></br>
     <input
     type="checkbox"
     onChange={changeHandler}
     name='vis'
     id='vis'
     checked={formData.vis}
     />
     <label htmlFor='vis'>Am I Visible?</label>
     <br></br>
     <br></br>
     <fieldset>
      <legend>mode</legend>
      <input
     type='radio'
     onChange={changeHandler}
     name='mode'
     value="online"
     id='online'
     checked={formData.mode==="online"}
     />
     <label htmlFor='online'>Online</label>
     <br></br>
     <br></br>
     <input
     type='radio'
     onChange={changeHandler}
     name='mode'
     value="offline"
     id='offline'
     checked={formData.mode==="offline"}
     />
     <label htmlFor='offline'>Offline</label>
     </fieldset>
     <br></br>
     <br></br>
     <label id='food'>Favourite Food</label>
   <select
   onChange={changeHandler}
   name='food'
   id='food'
   value={formData.food}
   >
    <option value="momo">Momo</option>
    <option value="kabab">Kabab</option>
   <option value="biryani">Biryani</option>
   <option value="desert">Desert</option>
   </select>
   <br></br>
   <br></br>
 
   <button onClick={submitHandler}>submit</button>

     </form>
   </div>

  );
}


export default App;

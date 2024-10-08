import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [full,setFull]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
     if(firstname && lastname){
      setFull(`${firstname} ${lastname}`)
     }
    
  }

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit} id='form' >
        <label for="first">First Name:</label>
        <input type='text' id="first" onChange={(e)=> setFirstname(e.target.value)} required /><br/>
        <label for="last">Last Name:</label>
        <input type='text' id="last" onChange={(e)=> setLastname(e.target.value)} required/><br/>
        <button type='submit' >Submit</button><br/>
        
      </form>
      {full ? `Full Name: ${full}`: ""}
    </div>
  );
}

export default App;

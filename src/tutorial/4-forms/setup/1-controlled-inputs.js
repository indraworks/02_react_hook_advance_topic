import React, { useState } from "react"
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
/*
sebagai caatan bisanya utk form ada action namanya handke submit nah 
itu dari form dgn panggil functionnya 
nah bisa juga dgn tombol dari button dimana button masih anggota control dari 
form ,tapy buttonya harus bertype ="submit" 

*/
const handleSubmit = (e) => {
  e.preventDefault() //utk hindary browser refresh
  console.log("hello world")
}

const ControlledInputs = () => {
  return (
    <>
      <h1>controlled inputs</h1>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='firstname'>Name</label>
          <input
            type='text'
            id='firstName'
            placeholder='firstName'
            name='firstName'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type='text' placeholder='email' id='email' name='email' />
        </div>
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  )
}

export default ControlledInputs

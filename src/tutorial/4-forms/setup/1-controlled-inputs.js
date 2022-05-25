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
      <h4>controlled inputs</h4>
      <form className='form' onSubmit={handleSubmit}>
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
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ControlledInputs

/*

sebagai caatan bisanya utk form ada action namanya handke submit nah 
itu dari form dgn panggil functionnya 
nah bisa juga dgn tombol dari button dimana button masih anggota control dari 
form ,tapy buttonya harus bertype ="submit" 
cara 
1)bisa dgn onClikc , onsubmit di form di ksoongkan 
bisa di ketahui dari button dgn type submit:
<button type='submit' onClick={handleSubmit}>
          Submit
        </button>

2)atau dari form dimana  <form onSubmit={handleSubmit}>
dan buttonya tak perlu pakai onCLikc 




*/

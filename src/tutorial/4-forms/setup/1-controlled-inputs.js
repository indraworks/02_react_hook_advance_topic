import React, { useState } from "react"
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
/*
/ReACT
utk hooks jadi nilamai eleemnt adalah object 
  e--->e.target.value
  nah diinput value yg kita isi nilai element kita ref---> state
  disini state sesuai dgn nama input name,email , maka  value= {name} dan value={}
  -dalam input juga harus ada onChange utk stiap perubahan
  onChange pada input adalah event perubahan yg terjadi thd nilai2 inputForm,
  nah onCnahe ini value kita beri functioan dari state  yaiut  ()=>setName(e.target.value)
  sbb:
*/

const ControlledInputs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault() //utk hindary browser refresh
    console.log("name ==", name)
    console.log("email ==", email)
  }

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            placeholder='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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





*/

/*



*/

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

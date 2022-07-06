import React, { useState } from "react"
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
/*
/ReACT
utk hooks jadi nilamai eleemnt adalah  event object 
  e--->e.target.value
  nah diinput value yg kita isi nilai element kita ref---> state
  disini state sesuai dgn nama input name,email , maka  value= {name} dan value={}
  -dalam input juga harus ada onChange utk stiap perubahan
  onChange pada input adalah event object/ perubahan yg terjadi thd nilai2 inputForm,
  nah onChange kita lewatkan nilai eventObject pada function State setstate
  atau dari mana State mis dibawah name ,setName 
    sbb:
    onChange= {e=>setName(e.target.value)}
    note:setName(setState) adalah 
*/

/*REACT-2

*/

const ControlledInputs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault() //utk hindari bounce pada browser/refresh
    console.log(name)

    console.log(email)
  }

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='name'>name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>email</label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            Add People
          </button>
        </form>
      </article>
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

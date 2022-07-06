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
  //kita akan tampung name emald masukan dalam array yaitu di variable array
  //kit aberi nama people begit di submit ini masuk stlahnya kita renderl dalam list
  //nah syarat masuk dalam list adalah jika name dan email tidak kosong
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault() //utk hindari bounce pada browser/refresh
    if (email && name) {
      //name & email dumasukan object
      const person = {
        id: new Date().getTime().toString(),
        name: name,
        email: email,
      }
      //{name:name,email:email}
      //dlm es6 kalau key value sama bisa dtiulis {name,email}
      setPeople((people) => {
        return [...people, person]
      })
      setEmail("")
      setName("")
    } else {
      console.log("zero added")
    }
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
        {people.map((item, index) => {
          const { id, name, email } = item
          return (
            <div className='item' key={id}>
              <h4>{name}</h4> <p>{email}</p>
            </div>
          )
        })}
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

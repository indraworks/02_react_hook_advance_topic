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

/*REACT-2
bagian 2 dari React ini adalaj kita akan gunaakn state ke 3 yg isinya adalah array object 
people =[{name0,emmail0} ,  {name1,emmail1}       ] nah state ini akan kita isikan dalam bentuk araray yg 
const [people,setPeople] = useState([])
nah ketika kit atekan tombol button maka yg kita lakaknan adalah 
mengisi state people ini dgn 2 state dari name,email yg sudah diref ke input control pd form 
ingat utk setting pada aray harus dgn animous functuon 
dan nilai return karna perbarui ,jadi stalh di spread...,jadi individue di edit dikemablikan 
setPeople(()=>
[...people,{ 
  name:name,email:email
}])
namememail sblahkanan adalah state dari input control 
nah setlah kita tambahkan makan inputcontrol jarus clear maka 
setName("")
setEmail("")
=====add item pada list :
nah kita akab buat list utk tampilkan people state pada list utk itu 
kita baut map nah yg menarik kita akan buat idnya adar masing2 uniq  
id bisa dibuat dgn tangal id = new Date.
*/

const ControlledInputs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault() //utk hindary browser refresh
    // console.log("name ==", name)
    // console.log("email ==", email)
    //let itemNew = { name: name, email: email }
    if (name && email) {
      console.log(` ${name} ${email}`)
      let newItem = { id: new Date().getTime(), name: name, email: email }
      console.log(newItem)
      setPeople((people) => [...people, newItem])
      //kalau liat state jangan di console.log sbgaiknya di tool react yg ada di panel console
      //Strict modenya di off dulu ilangin biar gaj error !
      /*
       {email: "sdsadsadasd", name: "ddasdsadsad"}
name:"ddasdsadsad"
email:sdsadsadasd"

: 


      */

      console.log(people)
    } else {
      console.log("empty value")
    }
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

      {people.map((item) => {
        const { id, name, email } = item

        return (
          <div className='item'>
            <h4 key={id}>{name}</h4>
            <p>{email}</p>
          </div>
        )
      })}
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

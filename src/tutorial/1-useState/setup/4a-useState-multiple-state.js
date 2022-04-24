import React, { useState } from "react"
//import data from '../../../data'

const UseStateObject = () => {
  const [id, setId] = useState("1")
  const [name, setName] = useState("Alvanza")
  const [message, setMessage] = useState("awal berita")

  const ChangeMessage = () => {
    setId("6")
    setName("Inova")
    setMessage("hai saya adalah berita baru dari setting State")
  }

  return (
    <>
      <h4>{id}</h4>
      <h4>{name}</h4>
      <h4>{message}</h4>

      <button onClick={ChangeMessage}>Update</button>
    </>
  )
}

export default UseStateObject

/*
bagaimana maksudnya dgn multipel statae kita gak perlu pakai spread dalam sbuah object 
sebgai OR atau sisa dari element yg di update 
kita gunakan dgn cara buat state2  useState diatas kan 3 element nah element2 tersbut 
kita jadikan state 
const [id,setId] = useState('1')
const [name,setName]=useState('Alvanza')
const [message,setMessage] = useState('awal berita)
jadi kita gak perlu pakai object lagi cukup state atau multistate yg terpisah 
dan tinggal menulis2 state2 variable awal tersbut dan mengisi 
handler atau function setState pada function  agar jika tombol ditekan terjadi pergantian 
state dan re-render /perbarui layar tampilan 

*/

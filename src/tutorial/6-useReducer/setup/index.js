import React, { useReducer, useState } from "react"

import Modal from "./Modal"
import data from "../../../data"

//declare func reducer
const reducer = (state, action) => {
  //isi reducer adalah cek action.type yg dikirim dispatch
  //state harus dkembalikan WAJIB jika tidak maka console.log(state) berisi = 'undefined'
  console.log(state)
  //selection dan laksanakna return state ini kosongan aja practice 1:
  if (action.type === "ADD_ITEM") {
    // return state
    console.log("no return ")
  }
}
//declare defaultState
const defaultState = {
  people: [],
  isShowModalOpen: false,
  titleModal: "" /*ini dimasukan ke component Modal sbgai props   */,
}
const Index = () => {
  const [firstName, setFirstName] = useState("")
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    //practice dispatch
    if (firstName) {
      dispatch({
        type: "ADD_ITEM",
      })
    }
  }

  return (
    <>
      {state.isShowModalOpen && <Modal textModal={state.titleModal} />}
      <form type='submit' className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'>Name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <button className='btn' onClick={handleSubmit}>
          ENTER
        </button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div className='item'>
            <ul key={id}>{name}</ul>
          </div>
        )
      })}
    </>
  )
}

export default Index

/*POINT PENTING useReducer:
jadi intinya dengan jalankan "dispatch" nnti maka otomatis 2 yg dijalankan 
yaitu perubahan "state" krn dari melakukan "action" di function reducer 
WARNING!! perlu diingat ygnaanya state itu harus dikembalikan 
karena kalau tidak maka dia akan menjadi undefined sbb kalau function dispatch dia menunggu kembalian dari 
state nah dispatch ini function MENGOLAH action object nah isinya itu action = { type:TYPE_NAMR,payload:}
nah type disini adalah type acton apa yg diterima reducer 
dan payload adalah suatu object berisi indofmrasi mau diapakan nnti si STATE tsb sblumn dikembalikan direturn 
misalkan contoh 
action.type ="ADD_ITEM",
action,payload = {setUpdateText:"ini adalah berita "} 
nah jadi utk payload ini dia berisi suatu nilai utk mengubah state yg awal 
ok sbb kita akan lihat dari awal  mis contoh kembalian jika state tidak di return :
dan jangan lupa utk perubahan state yg dikembalikan :

=====
dispatch 
=====
dijelaskan diatas dispatch laksanaka 2: action.type action.payload 
utk payload adalah merupakan pengubah state informasi dan skligus action apa ygakan dikeain pada state yg ada di reducer 
contoh dispatch:
dispacth({
  type:"ADD_ITEM",
 
})

pada saat kita isi input dan tekan enter maka dispatch akan megiting tuype 
diatas kita tak ada blum buat payload :
 if (firstName) {
      dispatch({
        type: "ADD_ITEM",
      })
nah pada saat conolse.llg( state) direducer ini isinya karena kita return :
yg direturn adalah object state tadi awal krn btlum berubah: 
{people: Array(0), isShowModalOpen: false, titleModal: ''}

coba kalau kita tidak return apa isinya? 
ini!:
uncaught TypeError: Cannot read properties of undefined (reading 'isShowModalOpen')
JADI TERJADI ERROR 



====end penjelasan dispatch 


*/

/* DASAR PENTING!
mmbuat form utk input dan button 
mmbuat state utk name, 
mmngunakan useReducer dimana trdiiri dari state berasal dari defaultState dan reducer sbuah functin 
berisi (state,action ) dimana utk ubah state awal/defautl state tadi 
defaultState berisi element object ( people isi data ,showModal = false, titleModal="" ( ini tulusan props utk modal))
NOTE PENTING:
function reducer dideclare diluar function component main /utama 
defaultState ddeclare juga di luar functio component main /utama 

*/

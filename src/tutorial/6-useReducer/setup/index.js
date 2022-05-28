import React, { useReducer, useState } from "react"

import Modal from "./Modal"
import data from "../../../data"

//declare func reducer
const reducer = (state, action) => {}
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
    setFirstName(e.target.value)
  }

  return (
    <>
      {state.isShowModalOpen && <Modal textModal={state.titleModal} />}
      <form type='submit' className='form'>
        <div className='form-control'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            onChange={firstName}
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

/*
jadi intinya dengan jalankan "dispatch" nnti maka otomatis 2 yg dijalankan 
yaitu perubahan "state" krn dari melakukan "action" di function reducer 

*/

/*
mmbuat form utk input dan button 
mmbuat state utk name, 
mmngunakan useReducer dimana trdiiri dari state berasal dari defaultState dan reducer sbuah functin 
berisi (state,action ) dimana utk ubah state awal/defautl state tadi 
defaultState berisi element object ( people isi data ,showModal = false, titleModal="" ( ini tulusan props utk modal))
NOTE PENTING:
function reducer dideclare diluar function component main /utama 
defaultState ddeclare juga di luar functio component main /utama 

*/

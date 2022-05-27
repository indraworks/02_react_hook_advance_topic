import React, { useState, useReducer } from "react"
import Modal from "./Modal"
import { data } from "../../../data"
// reducer function & defaultState tulis dulu reducer func disini
//tidak didalamm index functio /main yg ada return(<> </>)
//jadi sekali lagi di atas main program nulisnya !
const reducer = (state, action) => {}

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: "Hello World",
}

//main program
const Index = () => {
  const [name, setName] = useState("")
  //peoplediganti dng useReducer
  const [state, dispatch] = useReducer(reducer, defaultState) //reducer adalah function yg akan mngubah
  //state2 stlah dispatch melakukan action
  //reducer trdiir atas state & action
  //nah utk state nilai awalnya adalah dari defaultState
  //shingga pada bagian return dibawah  state.showModalOpen adalah false
  //nah modalContent sendiri adalah mrupakan props utk Modal compoennt passing text param tulisan pada Modal

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
    } else {
    }
  }

  return (
    <>
      <h2>useReducer</h2>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className='btn' type='submit' onClick={handleSubmit}>
          Add Person
        </button>
      </form>
      <div>
        {state.people.map((person) => {
          const { id, name } = person
          return (
            <ul key={id}>
              <li className='item'>{name}</li>
            </ul>
          )
        })}
      </div>
    </>
  )
}

export default Index

/*
bagian refactor:
jadi dibagian 2 ini kuta akan menggunakan reducer nah apa itu usereducer 
sbuah function builtin yg mana dia mengambil atau getting state, getting action 
utk melakukan action ini dia mmbutuhkan fucntion yg namanya dispacth ,
nah utk supay dispatch ini bekerja maka dia akan menghubungkanya pada function kitasebut reducer
nah dalam reducer ini nnti kita akan buat state,action . 
nah utk state sndiri kita harus punya nilai awal atau initialState atau defaultState 
yg berupa object2 element2 state 

const defaultState = {
  peoples:[],
  isModalOpen:false,
  modalContent:'' 
}


*/

/*bagian awal :

utk awal2 sama dgn form yg sudah kita bahas disini akan dibahas penggunaan usreducers, utk index.js sengaja dibuat file agar nnti pada saat do App.js
importnya without to go to specific file under setup dir. 
disni kita akan buat modal tampilan jika error 


*/

import React, { useState, useReducer } from "react"
import Modal from "./Modal"
import { data } from "../../../data"
// reducer function

const Index = () => {
  const [name, setName] = useState("")
  const [showModal, setShowModal] = useState(false)
  //nilai awal people adalah isi data
  const [people, setPeople] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      setShowModal(true)
      setPeople([
        ...people,
        { name: name, id: new Date().getTime().toString() },
      ])
      setName("")
    } else {
      showModal(true)
    }
  }

  return (
    <>
      <h2>useReducer</h2>
      {showModal && <Modal />}
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
        {people.map((person) => {
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
utk awal2 sama dgn form yg sudah kita bahas disini akan dibahas penggunaan usreducers, utk index.js sengaja dibuat file agar nnti pada saat do App.js
importnya without to go to specific file under setup dir. 
disni kita akan buat modal tampilan jika error 


*/

import React, { useState, useReducer } from "react"
import Modal from "./Modal"
import { data } from "../../../data"

const Index = () => {
  const [firstName, setFirstName] = useState("")
  const [people, setPeople] = useState(data)
  const [showModal, setShowModal] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstName) {
      setShowModal(true)
      setPeople([
        ...people,
        { id: new Date().getTime().toString(), name: firstName },
      ])
      setFirstName("")
    }
  }

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-control'>
          <label htmlFor='name'>input-name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <button type='submit' className='btn'>
          add
        </button>
      </form>
      {people.map((person) => {
        return (
          <div className='item' key={person.id}>
            {person.name}
          </div>
        )
      })}
    </>
  )
}

export default Index

import React, { useState } from "react"
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys
/*
jadi mulitipel input ini sudah dibahas dijavascript ngget object dynamic key values referal jad dgn pakai tanda ['keypbjec']: value  maka bisa diambil eelemtn obejct skligus updatejuga 
disni name,email,age 

*/

const ControlMultipleInputs = () => {
  //disini ada 4 input name,email,umur ,gaji
  //dimasukan dalam object element person
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
    salary: "",
  })
  //stlah masuk person dimasukan ke peiople utk tampung banyk object
  //yg person utk tampung 1 buah object eleent dari input
  //jadi 2x kerja
  const [people, setPeople] = useState([])

  //utk simpan object2 di array

  //utk tiap input waktu eventChange nilai berubah base nilai
  //yg ada diinput saat itu pada evebt onChange = {setChange}
  ////onhChange = setChange dimana masing2 name disii etarget.name
  //dan value = e.target.value
  const handleChange = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    //spreading element person object selain dari element yg diupdate!
    setPerson({ ...person, [name]: value })
    console.log(`${name} : ${value}`)
  }

  //nilai yg ada form ,final smua nilai input dimasukan arrya
  //[name] mewakili refer pada variable isrname,email,salary,age

  const handleSubmit = (e) => {
    e.preventDefault()
    //spreading masing2 aray people yg bukan yg diupdate
    //nah tapi kita tenabah dari id itk person kita ganti dgn newPersin
    //baru dimasukan ke people array
    const newPerson = { ...person, id: new Date().getTime().toString() }
    setPeople([...people, newPerson])
    setPerson({
      firstName: "",
      email: "",
      age: "",
      salary: "",
    })
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>FirstName</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='salary'>Salary</label>
            <input
              type='text'
              id='salary'
              name='salary'
              value={person.salary}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>age</label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button className='btn' type='submit'>
            add Person
          </button>
        </form>
        {people.map((item, index) => {
          const { id, firstName, email, salary, age } = item
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>
                {email} {salary} {age}
              </p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlMultipleInputs

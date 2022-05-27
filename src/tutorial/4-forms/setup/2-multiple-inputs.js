import React, { useState } from "react"
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys
/*
jadi gini control multiple input inimaksudya kita akan melakaukan hanya 1 kali saja 
update tidak setiap input dibuat statenya satu2 di setState masing2 per-input 
caranya adalah kita mmbuat sbuah state object yg elementnya terdiiri atas input2 tsb 
dan ini dalam 1 buah object state
nah refernsinya adalah dengan ambil dinamy object keys dalam hal ini adalah name dari input
dan valuenya 
kita akan gunakan event onChange dari tiap2 input tsb jika dia betuba kita tingal set dari 
[name] = value 
ini intinya jadi otomatsi siapa yg diupdate itu yg masuk kesana 
===> nah finahmya buah habdleChange utk update sluruh /array yg ada atau perubahanya ! 
jadi ada 2 event onChange dan handleSubmit( yaitu finalnya perubahan input disimpan dan diolah )

*/

const ControlMultipleInputs = () => {
  //disini ada 4 input name,email,umur ,gaji
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
    salary: "",
  })

  //utk simpan object2 di array
  const [people, setPeople] = useState([])

  //utk tiap input waktu eventChange nilai berubah base nilai yg ada diinput saat itu
  const setChange = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    /*
   knapa pakai spread??ya karena 
   ...person tak lain adalah sisa keseleruhan 
   sedangkan kita tahu bahwa [name]:value adalah 
   dinamic kita tak tahu saat change terjadi yg diisi yg mana saja 
   jadi pasti ada sisa selain yg diisi,itu yg dispread 

    */
    setPerson({ ...person, [name]: value })
  }

  //nilai yg ada form ,final smua nilai input dimasukan arrya
  const handleSubmit = (e) => {
    e.preventDefault()
    //id dimasukan disni jangan diawal2 !
    const newPerson = { ...person, id: new Date().getTime() }
    setPeople((people) => {
      return [...people, newPerson]
    })
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          {/* firstName */}
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={setChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={setChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age :</label>
            <input
              type='text'
              id='age'
              name='age'
              placeholder='age'
              value={person.age}
              onChange={setChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='salary'>Salary :</label>
            <input
              type='text'
              id='salary'
              name='salary'
              placeholder='salary'
              value={person.salary}
              onChange={setChange}
            />
          </div>

          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age, salary } = person
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
              <p>{salary}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlMultipleInputs

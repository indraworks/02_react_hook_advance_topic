import React, { useState, useContext } from "react"

import { data } from "../../../data"
// more components
// fix - context api, redux (for more complex cases)
/*
jadi contextn api adalah utk jembatani kita ngedirl dari atas 
ke bawah bawa props 
caranya gunakan useCOntext declare setalhanya 
2) buat nama varaible yg sesiai dgn root component/parent component
   contoh disini adalah :
   const PersonContext = React.createContext()
   dengan buat contextApi ini maka akan terbntuk 2 component:
   -Provider :pembungkus
   -consumer :-pengguna utk olah props dari anak ditingkat berapapun (dgn :useContext)

3)cari dimana ROOT function component kita berada setelhanya 
  kita taruh sbuah wrapper dari context ini dimaksudkan utk bungkus semua component anak dibawahnya sehingga tidak perlu 
  lagi kita buat drill props cukup 1 buah props atau berapa props lewatkan dari parent ,si penerima dimana saja bisa di ambil prop 
  ini mau tingkat 1,2,3 sampai 100 sekalipun artinya begitu di wraping  dgn context.provider dan kasih props maka sianak darimanapun bisa olah props ini!!!
  contoh commandnya kita taruh di parent /root func component:
  
  <PersonContext.provider value={hello}>
  </PersonContext.provider >

4) dibagian anak ditingkat berapun mis di component Anak SinglePerson
  kita mau ambil ini props value ygisinya hello maka sbb:

  const SinglePerson =()=> {
    //baut variable data dan gunakan useCOntext dan panggil variable createContext yg kita declare diawal
    //atau wrappernya 
    const data = useContext(PersonContact)
    
    //tinggal console.log( data) hasilnya akan muncul smua props dari parent di render di anak!!

  }
  jadi contoh konkretnya :
  const SinglePerson = ({ id, name, removePerson }) => {
  const myvar = useContext(PersonContext)
  return (
    <div className='item'>
      <h4>
        {name} {myvar} <----otomatis akan ke-render prop dari atas!
      </h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

demikianlah ulasan mengenai contextatau useContext!

/////utk contoh dibawah ini lanjutin prop drill kita ini mau lalukan obbject dari function removePerson
//makanya ditulis double {{namapropObj-nya}}

// <PersonContext.Provider remove={{removePerson}}> 
nah di bgian anak kita tinggal bisa ambil di level 3 anak component yaitu di 
bagian SinglePerson!

*/
const PersonContext = React.createContext() //bisa dideclare diatas bersama use context pada
//bagian declarasi react import {React,useContext,createContext} from 'react'

const ContextAPI = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <PersonContext.Provider value={{ removePerson }}>
      <h3>prop drilling</h3>
      <List people={people} />
    </PersonContext.Provider>
  )
}

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  //yg dibawah ini yg diambil obejctnya ya yg dari atas {{removePerson}}
  //bukan valuenya !!
  //diaprent tertulis  <PersonContext.Provider value={{ removePerson }}>
  //yg diambil adalah object function sbgalh kanan didestructive sbb:
  const { removePerson } = useContext(PersonContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI

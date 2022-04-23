import React, { useState } from "react"
//import data from '../../../data'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    id: "2",
    name: "Thomason",
    message: "Good Morning student",
  })

  const ChangeMessage = () => {
    setPerson({ ...person, message: "guk guk myStudent!" })
  }

  return (
    <>
      <h4>person.id</h4>
      <h4>person.name</h4>
      <h4>{person.message}</h4>

      <button onClick={ChangeMessage}>Remove</button>
    </>
  )
}

export default UseStateObject

/*

object sangat menarik sekali diatas dalam object ada 3 buah elenet 
person ={ id:'1',
          name:'ndra',
          message:'hello good mornig

}

nah kalau ini objectmaka kalaukita ganti lagnsung menjadi 
jadi jika objectmaka kita wajib ganti degna cara set elemetn obejct tesrsebut sbb:
setPerson({message:'Hello Good Night!}) 
nah ini tak akan bisa ganti sebab jika diganti maka smua obhect diatas akan hilang 
jadi personisinya akan {message:'hello good nignt} element id dan name ketimpa 
NAH ukt itu wajib kita pakai spread operator dari object yg artinya disebut OR  atau sisa
jadi cara setitng salah satu elementnya gimana dgn cara spread ...person ,
dengan spread ini artinya sisa ari object yg bukan dari mesaage sbab mesaage sudah kita 
jadi sekali lagi kalau kita pakai object harus memuat element yg mau diubah bersama dgn spread ...sisaElementObject
misalkan contoh:
setBerita(...sisaObjectElement,elementTarget:NewValue)

*/

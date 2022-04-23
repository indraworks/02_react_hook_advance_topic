import React, { useState } from "react"
//import data from '../../../data'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    id: "2",
    name: "Thomason",
    message: "Good Morning student",
  })

  const ChangeMessage = () => {
    //setPerson({ ...person, message: "guk guk myStudent!" })
    //jika 3 3 nya mau dioubah dengan cara object

    setPerson({
      ...person,
      id: "4",
      name: "indra suryawan",
      message: "hello buddy new ways",
    })
    console.log("kondisi belum update", { ...person })
    console.log("ini hasil =", { ...person, id: "6" })
  }

  return (
    <>
      <h4>{person.id}</h4>
      <h4>{person.name}</h4>
      <h4>{person.message}</h4>

      <button onClick={ChangeMessage}>Remove</button>
    </>
  )
}

export default UseStateObject

/*
nah pertanyaan menarik lha saya pingin ganti semuanya tapi pakai object gimana 
NAH tetap harus dilakukan dengan cara spread  yaotu perintah OR yg artinya copy 
sluruh sisa ,jadi sread itu mmbuka bungkusannya dan mengeluarkan sisanya 
dar piihan 
jadi kalau kita pakai cara object utk memilih setPerson dari masing2 element akan jadi sperti 
ini :
setPerson({...person,id:3,name:'aku',message:'apa kabar sayang'});

supaya kita paham jadi sebenarnya utk ...person adalah mengeluarkan object element dari object
jadi individu2 dan mmbolehkan individu tersebut diupdate  contoh:

 console.log("ini hasil =", { ...person, id: "6" }) *

ini hasil = {id: '6', name: 'Thomason', message: 'Good Morning student'}
jadi kalau ditulis * diatas seakan2 begini :
{ name:'thomason',mesasge:'Goodmorning',id:'6',} 
jadi element2 tsb terpecah dan merupaka sisa dari yg bukan di update 
jadi name dan mesage adalah  bagian dari isi ...person  sisa dari yg bukan diupdate!

contoh biar jelas :
console.log(kondisi belup update,{...person})
kondisi belum update {id: '2', name: 'Thomason', message: 'Good Morning student'}
nah terlihat {..person } sisanya adalah smua individu2 yg ada di element object!
spread nerlaku pada object dan array!





*/

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

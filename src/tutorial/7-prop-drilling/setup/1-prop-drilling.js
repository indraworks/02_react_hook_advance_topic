import React, { useState } from "react"
import { data } from "../../../data"

// more components
// fix - context api, redux (for more complex cases)

/*
jadi intinya prop driling itu gimana 
nisalkan dari main punya anak-component 1
anak komponent-1 trima props dari main 
nah stlahnya anak compient-1 punaya anak  comopoent-2 
nah component-2 ini trima props dari componetn-1 
nah sekarang jika kita mau deletete list anak compoentn-2 ini 
maka kita harus buat props lagi kebawah  ... 
ini baru 3 kalau ada 10 tinggkatan misalnya psti cape  



*/

const PropDrilling = () => {
  //buat hook state
  const [people, setPeople] = useState(data)
  //kita mau buat funct removePerson atau item -iinvidu list
  //remove dlm sbuah array adalah dgn cara di filter dan nilai kembalianya
  //adalah selain dari yg bukan id yg di cari/filter
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  /*
   nah diatas ada function removePersonItem ini remove 
   utk singelPerson nah ini dibutuhkan oleh si anakcomponent SinglePerson
   nah sianak List tidak butuh tapi harus melweatkan props ini ke component SInglePerson
   dari sini kita simpulkan bahwa props sbgai argument ini bisa terima parameter tidak hanya state 
   variable tapi juga function sperti contoh diatas,jadi harus lewatkan ke list -->SinglePerson 
   


  */

  return (
    <section>
      <h2>prop drilling</h2>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        )
      })}
    </>
  )
}

/*
PENTING!!! daripada tulis <SinglePerson key={person.id} id={person.id} name={person.name} />
utk id={person.id} name={person.name}
maka kita bisa langsung tulis spread operator yaitu {...person} karena
kalau dbonkae {..person } itu artinya sama dgn  {id:1,name:'indra',id:2,name:'yudi' ,..dst} nah dari padai sprti itu langsung saja diganti/jadikan spread!
yg intinya individu2  id ,name sudah dipisah2 sbgai props /dispread!
sehingga  kita tulis lagi
 <SinglePerson key={item.id} {...person} />
 dan kita tambahkan juga utk removePerson
sehngga menjadi :
 <SinglePerson key={item.id} {...person}  removePerson={removePerson} />

 nah di anak kita juga pasing props removePerson ini jadinya 
 SinglePerson = ({ id, name,removePerson }) => {}
 nah terakhit kita buat buttonnya dan onClikc kita panggil invoke functionya 
 utk passing id meremove single person berdasarkan id dari list 
*/

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>
        {id} {name}
      </h4>
      <button classname='btn' onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  )
}

export default PropDrilling

/*
nah diatas itulah disebut props drilling jadi masukan trus kebawah propsnya 
speti orang ngebor //droill dan ini tak bagaus jika banyak component anak dibawah 
utk itu kita gunaan contextAPI 
jadi udah gak perlu lagi ngebor props /prop drilling ke anak 
ketingkat yg bawah!


*/

import React, { useReducer, useState } from "react"

import Modal from "./Modal"
import { data } from "../../../data"

//declare func reducer
const reducer = (state, action) => {
  //isi reducer adalah cek action.type yg dikirim dispatch
  //state harus dkembalikan WAJIB jika tidak maka console.log(state) berisi = 'undefined'
  //oya state ini awal isinya adalah  = defaultState yaitu :
  /*
   isi state:
   isShowModalOpen: false
    people: Array(4)
    0: {id: 1, name: 'john'}
    1: {id: 2, name: 'peter'}
    2: {id: 3, name: 'susan'}
    3: {id: 4, name: 'anna'}
    length: 4
    [[Prototype]]: Array(0)
    titleModal: ""
  

  */
  //nah jadi diatas kalau mau update atau add  people array maka
  //jadina akan speti ini di spread {...state.people,newItem}
  //nah karena newItem dibawah oleh /diwaili oleh action,payload
  //maka tertulis {...state.people,action.payload}
  if (action.type === "ADD_ITEM") {
    const newItem = [...state.people, action.payload] //utk state.people saja di update  yg modal text tidak krn dari typenya yg berarti instruksi utk ADD_ITEM tambah item di people state saja .
    //nah statement diatas kita masukan spread state.people dan tambah dgn newitem yg diwakili oleh variable action.payload
    //nah sesuadah update newItem variable barulah dibwah kita secara ksluruhan update "state" yg isinya element
    //people,modal dan textModal tadi
    //INTINYA AWALYS ALWAYS JIKA kita return state kita mesti lakukan :copy state atau disebut spread state
    //yaitu :...state ,ini wajib!!!
    return {
      //
      //disini di spread state ( ygisinya poeple,textmodal,modal di update) ccc
      ...state,
      people: newItem,
      isShowModalOpen: true,
      titleModal: "add_item done",
    }
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isShowModalOpen: true,
      titleModal: "Please fill value ",
    }
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isShowModalOpen: false,
    }
  }
  if (action.type === "REMOVE_ITEM") {
    //ada fildter,ada find(utk update)
    const newItems = state.people.filter(
      (person) => person.id !== action.payload
    )
    //nah update statenya
    return {
      ...state,
      people: newItems,
      isShowModalOpen: true,
      titleModal: "Remove-Item",
    }
  }
}
//declare defaultState
const defaultState = {
  people: data,
  isShowModalOpen: false,
  titleModal: "" /*ini dimasukan ke component Modal sbgai props   */,
}
const Index = () => {
  const [firstName, setFirstName] = useState("")
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    //practice dispatch
    if (firstName) {
      //add new_item dgn taruh hasilnya di varuable new_item
      const newItem = { id: new Date().getTime().toString(), name: firstName }
      dispatch({
        type: "ADD_ITEM",
        payload: newItem, //specific pada satu element
        //nah nnti di bagian state direducernya kita akan
        //ubah state dlm hal ini people
      })
      setFirstName("")
    } else {
      dispatch({
        type: "NO_VALUE",
      })
    }
  }

  //nah utk close modal kita buat functuon sendri dan functon ini aka dispatch ke  state di reducer
  ///nah tapi utk buaat false harus ada penundanya dulu ,utk iut kita jadikan props di component Modal
  //sbb: closeModal masuk ke component Modal sbgai props nnti isiya kita buat delay 3s dgn useEffect
  //stalh 3s baru NILAI STATE  : isShowModalOpen jadi false !
  //jadi close modal itu adalah function yg ada /hidup di <Modal/> component
  // ktika button diklik dia "closeModal" akan active krn sbgai function yg "mandiri"
  //yg mana active krn adanya timer stlah 3 detik dia active krim dispach ke reducer utk close modal
  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
    })
  }

  return (
    <>
      {state.isShowModalOpen && (
        <Modal textModal={state.titleModal} closeModal={closeModal} />
      )}
      <form type='submit' className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'>Name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            <h4 key={id}>{name}</h4>
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
            >
              remove
            </button>
            <button
              onClick={() => dispatch({ type: "EDIT_ITEM", payload: id })}
            >
              remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
//setlah latiah ini kita buat latihan grocey budds karena libatkan CRUD
//itu utk yg biasa
//utk contextAPI dan useReducer gunakan latihan 14 -Cart
//nah stlah itu belajar contexxt baru kita ke
/*
Penjesalan close modal kita akan buat close_modal dan dia close stlah 3 second utk iut 
kitamasukan nnti props domodal timer 3 second setelahnya baru modal tsb tertutup

*/

/*
POINT PENTING use Reducer bagain 2:
setelah kita tahu bahwa state direducer menerima type action type 
maka harus direturn nah utk payload adalah apa yg dikirm laksanan tugas dari reducer
nah payload ini dirikim oleh dispatch 
jadi distpacth mengirim acton,type =="ADD_ITEM" --->sireducer filtering type2 action dari si dispatch 
si dispatch mmbuat payload adalah istrucksi mau diapakan si-state yg awal tadi yg sisinya defaultState
nah utk payload kan kita mau kirim firsName yg ada diinput box dan dimasukan ke array di state ( yg isinya stae awak 
  yaitu data.js ) berupa array object id dan name 
const defaultState = {
  people: data, <---data dimasukan ke state people 
}
sedang data berisi : 
export const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
]

nah pada dispatch kita kita tombolhandlesunbit di cklik :
//kita buat variable aja masukan perubahan utk id dan name,
//state disini adalah spread per biji /item smua anggota data jadi individue2 terpisah 
//mana ... ->ini simbol yg mewaliki sisa dari seluruh anggota array tadi!
//kalaunanti edit gimana bedanya sama tambah?
dispatch({
  ...state,
})


//penjelasan kalau update bedanya adalah 
//cari indexnya ...ktmu masukan nilai baru dgn varable 
 

 

*/

/*POINT PENTING useReducer: bagian 1.
jadi intinya dengan jalankan "dispatch" nnti maka otomatis 2 yg dijalankan 
yaitu perubahan "state" krn dari melakukan "action" di function reducer 
WARNING!! perlu diingat ygnaanya state itu harus dikembalikan 
karena kalau tidak maka dia akan menjadi undefined sbb kalau function dispatch dia menunggu kembalian dari 
state nah dispatch ini function MENGOLAH action object nah isinya itu action = { type:TYPE_NAMR,payload:}
nah type disini adalah type acton apa yg diterima reducer 
dan payload adalah suatu object berisi indofmrasi mau diapakan nnti si STATE tsb sblumn dikembalikan direturn 
misalkan contoh 
action.type ="ADD_ITEM",
action,payload = {setUpdateText:"ini adalah berita "} 
nah jadi utk payload ini dia berisi suatu nilai utk mengubah state yg awal 
ok sbb kita akan lihat dari awal  mis contoh kembalian jika state tidak di return :
dan jangan lupa utk perubahan state yg dikembalikan :

=====
dispatch 
=====
dijelaskan diatas dispatch laksanaka 2: action.type action.payload 
utk payload adalah merupakan pengubah state informasi dan skligus action apa ygakan dikeain pada state yg ada di reducer 
contoh dispatch:
dispacth({
  type:"ADD_ITEM",
 
})

pada saat kita isi input dan tekan enter maka dispatch akan megiting tuype 
diatas kita tak ada blum buat payload :
 if (firstName) {
      dispatch({
        type: "ADD_ITEM",
      })
nah pada saat conolse.llg( state) direducer ini isinya karena kita return :
yg direturn adalah object state tadi awal krn btlum berubah: 
{people: Array(0), isShowModalOpen: false, titleModal: ''}

coba kalau kita tidak return apa isinya? 
ini!:
uncaught TypeError: Cannot read properties of undefined (reading 'isShowModalOpen')
JADI TERJADI ERROR 



====end penjelasan dispatch 


*/

/* DASAR PENTING!
mmbuat form utk input dan button 
mmbuat state utk name, 
mmngunakan useReducer dimana trdiiri dari state berasal dari defaultState dan reducer sbuah functin 
berisi (state,action ) dimana utk ubah state awal/defautl state tadi 
defaultState berisi element object ( people isi data ,showModal = false, titleModal="" ( ini tulusan props utk modal))
NOTE PENTING:
function reducer dideclare diluar function component main /utama 
defaultState ddeclare juga di luar functio component main /utama 

*/

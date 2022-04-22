import React, { useState } from "react"

const UseStateBasics = () => {
  console.log(useState("hello World"))
  //manggil hasil utk eleemnt array[0]
  const name = console.log(useState("hello World")[0])
  //manggil hasil utk eleemnt array[1] ===hasil "hello World"
  const handler = console.log(useState("hello World")[1])
  //hasil array 2 adalah berupa function balik
  /*
   ƒ dispatchAction(fiber, queue, action) {
      {
        if (typeof arguments[3] === 'function') {
          error("State updates from the useState() and useReducer() Hooks don't support the " + 'secon…

    jadi intinya sebuah fucntion yg nanti akan mengubah elementvariable aray0 
    nah jadi kalau kita mau set variable kita maka aharus lewatan functuon ini sbauh nilai baru 
    agar parameter array[0] berubah semoga paham 

  */
  //nah dari pada nulis manual ditas  value =useState("hello World")[0],hanler = useState("hello world")[1]
  //sebaiknya kita destructif menjadi nama 1 nama element, 1nya nama funtion atau handler
  // nama ini sebarang tapi kita harus ikut aactuan dari react saja  misalkan
  // nama maka fucntion balik utk aray[1] = setNama , misalkan profile utk lement0nya maka  utk element1 nya
  //adalah  setProfile
  //nah cases diatas adalah kita buat dectructive menjadi :
  //const [title,setTitle] = useState("random title")
  return <h2>useState basic example</h2>
}

export default UseStateBasics

/*
tenatn guseStatae kalau kita lihat useState maka 
dia adalah sbuah functuon yg mana berupa kembalian 
sbuah variable dan seblahnya adalah functoon atau callback fucntion sbb:
hasil dari :console.log(useState)
ƒ useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }
nah jika kita masukan string sbgai param comsole.log("hello World") 
hasilnya:
hadilnya ternyata berupa array yaitu :["hello world",f]
nah isi array pertama adalah variable ,array 2 berisi function yg mana nnti dispatch utk ubah nilai dari array o atau si variable.






*/

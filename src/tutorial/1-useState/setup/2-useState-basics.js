import React, { useState } from "react"

const UseStateBasics = () => {
  //console.log(useState("hello World"))
  //manggil hasil utk eleemnt array[0]
  //const name = console.log(useState("hello World")[0])
  //manggil hasil utk eleemnt array[1] ===hasil "hello World"
  //const handler = console.log(useState("hello World")[1])
  //kita gunakakan destructive cosnt [name,setName ] = useState("random tutle")
  //daripada tulis 2 baris sprti ditas manggil araynya
  //nah supaya jadi toggle maka kita bua aja bolak balik dengan if
  const [title, setTitle] = useState("Indra")
  const clickHandler = () => {
    if (title === "Indra") setTitle("MyTitle is Random Title")
    else {
      setTitle("Indra")
    }
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className='btn btn-danger' onClick={clickHandler}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics

//hasil array 2 adalah berupa function balik
/*
   ƒ dispatchAction(fiber, queue, action) {
      {
        if (typeof arguments[3] === 'function') {
          error("State updates from the useState() and useReducer() Hooks don't support the " + 'secon…

    jadi intinya sebuah fucntion yg nanti akan mengubah elementvariable aray0 
    nah jadi kalau kita mau set variable kita maka aharus lewatan functuon ini sbauh nilai baru 
    agar parameter array[0] berubah semoga paham 

  
  return <h2>useState basic example</h2>
}*/

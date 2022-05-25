import React, { useState } from "react"

const UseStateCounter = () => {
  const [value, setvalue] = useState(0)
  const Adding = () => {
    setvalue(value + 1)
  }
  const Minus = () => {
    let i = 0
    setvalue(value - 1)
  }
  const Resetting = () => {
    setvalue(0)
  }

  return (
    <>
      <h3>Counter Example</h3>
      <h1>{value}</h1>
      <div className='section'>
        <button className='btn' onClick={Adding}>
          "+"
        </button>
        <button className='btn' onClick={Resetting}>
          "R"
        </button>
        <button className='btn' onClick={Minus}>
          "-"
        </button>
      </div>
    </>
  )
}

export default UseStateCounter

/*

kita baut counter utk 
cssnya ada di bagian section
sbb:



*/

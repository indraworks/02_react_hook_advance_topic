import React, { useState } from "react"

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const Decreased = () => {
    setValue(value - 1)
  }
  const Increased = () => {
    setValue(value + 1)
  }
  const Reseted = () => {
    setValue(0)
  }

  return (
    <>
      <h3>Counter Example</h3>
      <h1>{value}</h1>
      <div className='section'>
        <button className='btn' onClick={Decreased}>
          Decrease
        </button>
        <button className='btn' onClick={Reseted}>
          Reset
        </button>
        <button className='btn' onClick={Increased}>
          Increase
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

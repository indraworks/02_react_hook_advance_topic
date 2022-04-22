import React, { useState } from "react"
const [name, setName] = useState("")

const ErrorExample = () => {
  const handleClick = () => {
    setName("Suryawan")
  }

  return (
    <React.Fragment>
      <h1>Example basic UseState</h1>
      <h3>{name}</h3>
      <button className='btn-primary' onClick={handleClick}></button>
    </React.Fragment>
  )
}

export default ErrorExample

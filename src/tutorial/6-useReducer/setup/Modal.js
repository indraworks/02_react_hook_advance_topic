import React, { useEffect } from "react"

const Modal = ({ textModal, closeModal }) => {
  //jadi delay disni adalah menunda 3 detik closeModal function dispatch ke state
  //agar isSHowOpen = false  ,stlah 3s
  useEffect(() => {
    //jalankan dispatch "CLOSE_MODAL " stah 3s
    setTimeout(() => {
      closeModal()
    }, 2000)
  })
  return (
    <div className='modal'>
      <p>{textModal}</p>
    </div>
  )
}

export default Modal

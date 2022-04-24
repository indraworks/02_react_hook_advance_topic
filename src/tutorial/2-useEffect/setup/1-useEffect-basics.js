import React, { useState, useEffect } from "react"
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    //useEffect bekerja jika ada render di perbarui
    //merupakan anymious funct dan ini akan check mis jika angka > 1 maka
    //akan melakukan operasi lain

    console.log("call useEfect")
    if (value > 1) {
      document.title = `New Message ${value}`
    }
  }, [value])

  console.log("Render Component")
  return (
    <>
      <h2>useEffect Basics</h2>
      <h2>{value}</h2>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Start{" "}
      </button>
    </>
  )
}

export default UseEffectBasics

/*
defaultnya useEffect hanya berkerja jika ada render diperbarui
nah pada bagian 2 ini useEffect kerja jika saya tekan tombol counter
stiap tekan tombol render diperbaharui maka disaat itu useEfect bekerja 

dari atas terlihat program akan sama terus jalan 
pertama render component krn ada refresh useEfect jalan kan clg call useEffect
skalian check counter jika counter >1 nah stlah > 1 judul dari page berubah ! 
new Message 2 
*/

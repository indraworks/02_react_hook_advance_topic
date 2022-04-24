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
    //nah value di list ini disebut dependency lst
    //si useEfect ini di triger dari berubahnya value ini bukan dari re-render
  }, [value])

  //kita juaga dalam sbuah component function bisa taruh beberapa useEffect semau kita
  //gak ada masalah  yg dibawah ini di triger oleh re-render saja  listnya kosong!
  useEffect(() => {
    console.log("hello world")
  }, [])

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
UseEffect sbgai tambahan bisa di triger dari berubahnya variable nah inii
didalamnya ada [ ] list kita sebut sebgai dependency list 
nah kalau variable berubah didalam dependecy list tsb maka saat itulah si Use Effect bekerja 
ter triger 
2) useEfect jika dependecy listnya empty tanpa ada variabel alias kosong maka dia 
 hanya tertirger jika ada re-render/peraharui render.
*/

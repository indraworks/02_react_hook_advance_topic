import React, { useState, useEffect } from "react"

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth) //nilai gerakan window diamabil
    //djadikan nilai utk ubah state size /tamppilkan atau render
    //jadi stiap resixe ini dilakuakn maka akan buat useEfect bekerja
  }

  useEffect(() => {
    console.log("useEffect")
    //kita gunakan event wndow ,add eventlistener dimana
    //perubaha window itulah yg utk supaya ada function ( callback functoon )
    //nah call back function ini kitagunakan utk setSize nilai dari size yg berubah
    //karena gerankan window di update di mucnulkan dilayar
    window.addEventListener("resize", checkSize)
    //nah jika tanpa cleaup window.removeEventListener maka akan banyak
    //muncul di m emeory maka harus di clean up dgn function remove buit ini dibawah ini
    console.log("cleanUp")
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return (
    <>
      <h2>useEffect cleanup</h2>
      <h1>{size}</h1>
    </>
  )
}

export default UseEffectCleanup

/*

jadi gini kita akan buat program yg mana 
menggunakan evenlistener dimana kita akan setvalue sbuah window lebarnya 
nah seiring dgn rezise berubah ini picu widnow.addeventlisterner nah si addevnetlistener ini 
mnggubah state nilai dari window.size tadi  demikia sterusnya nah yg masalah 
ini add eventlistener akan mnumpuk di dalam memori utk itu jangan lupa supaya kita 
mmbuat sbuat clean up 'yatu window.removeEventListener() 
shingga stalh kejadian ada event maka event stsb di hilangkan dari memori direset algi 
nah jangan lupa utk tetap selalu menaruh [] aray kosong yg menandakan triger tereset default 
dari useEffect bahwa dia mesti /variable didalamnya direset ! 




*/

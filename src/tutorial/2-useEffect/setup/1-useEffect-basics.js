import React, { useEffect } from "react"
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  useEffect(() => {
    //useEffect bekerja jika ada render di perbarui
    //merupakan anymious funct
    console.log("call useEfect")
  }, [])

  console.log("Render Component")
  return <h2>useEffect Basics</h2>
}

export default UseEffectBasics

/*
defaultnya useEffect hanya berkerja jika ada render diperbarui
contoh diatas melaukukan console log maka totomatis si UseEffect kerja 
dan manggil fucntion yg ada didalamnya 
di console,log terlihat program 2x jalan render compinent stlahna useEffect di panggil
kita hilangkan aja UseStrctReact di index.js  biar gak 2x jalan di index .js kita hapus itu 
nah terlihat d console jika kita perbahatui refresh browser
maka totmatis program jalan  
"render Component " 
dan stelahnya panggil "call UserEffect"
sbb keluaran dari browser :
[HMR] Waiting for update signal from WDS...
1-useEffect-basics.js:12 : Render Component
1-useEffect-basics.js:9  : call useEfect


*/

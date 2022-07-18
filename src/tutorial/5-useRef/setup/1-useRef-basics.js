import React, { useEffect, useRef } from "react"

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

/*
jadi sebenarnya utk apa useRef itu ?
jadi sebenarnya useRef ini tidak sama dgn element.target.value 
dimana re-render perbaharui value ,jadi bebas dari control kita sndir ygreferensikan
atribut ref padanya 
nah dgn useRef ini kita sudah beri inisial value dulu pada inputBox atau element2 di html tsb
nah cara ambilnya adalah pada saat "current" yg artinya saat sekeang maka itu diambil crruent.value
nah 
nah caranya supaya dapat ambil current value kita butuh batunaya useEffect 
disni varaible reContainer = useRef(null) degan default null
//jadi yg dambil varaible refcontainer.curremt.focus <--- nilainya diambil 
 useEffect(() => {
    console.log(refContainer.current)
    refContainer.current.focus()
  }, [refContainer]) <---perubaha ktriger dan ambil currentFocus nilainya 

  //nah pada renderd jsx bagian return ( 
    //dibagaian input dlm case ini kita mau ambil value dari bagian input maka 
    //ref itu varaiblen ya di ref dgn props ref = prtoperty variable useRef yg sudah kita declate sbb:
     <input type='text' ref={refContainer} />  <---dimana refContainer sudah dideclare doatas 
     //yaitu dibawah input function utama :
     const refContainer = useRef(null)
   )

*/

const UseRefBasics = () => {
  //jadi tidak ada useState kita kasih nilai '' awal
  //kalau mau ganti gak ada set tapi di current.value nya diganti
  //prubahan statenya berubah karena adanya useEffect!
  //dibagian jsx jangan lupa propsnnya pake ref={}
  const refContainer = useRef(null)
  const divRefContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer)
    console.log("nilai value =", refContainer.current.value)
  }
  //useEffec harus sndiri gak bileh ada dlm function event
  useEffect(() => {
    console.log(refContainer.current) //input
    console.log(divRefContainer.current) //<div>Hello Word</div>
    //kalau mau isinya ya harus tambah dot value
    //console.log(divRefContainer.current.value)
    refContainer.current.focus() //utk focus ke variable refContaier isi current valuenya
  }, [refContainer, divRefContainer])
  return (
    <>
      <h3>useRef :</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button className='btn' type='submit'>
            Enter
          </button>
        </div>
      </form>
      <div ref={divRefContainer}>Hello Word</div>
    </>
  )
}

export default UseRefBasics

/*
kalau kita cclg si useRef yg ada hanya current object lah itu yg kita ambil cuk!
dan yg lain ya valuenya diambil!!!
jadi jika saya masukan text diinput box maka 
nilai console.log(refContainer) adalah sbuah object yaitu:
{current: input}
nah jadi current element objct ini yg kita ambil valuenya 
sehingga kia bisa ambil 

saya masukan  input nilai :dsdsfsdfsdf
maka di console console.log("nilai value =", refContainer.current.value) 
akan keluar cirrent nilai sbb:
nilai value = dsdsfsdfsdf
nah gimana nnisa stiap terjadi perubaha ditangkap kita akan gunakan useEffect(()=> {})
dimana jika trjadia perubahan maka akan berubah nilainya krn akan ter triger useEffect 
nah jangan lupa utk taruh useRef.current.focus atau 
direferensikan refContainer.current.focus shingga ssecara alami perubahan yg diketik
langsung terupdate !! 


*/

/*
jadi saya ulangi penggubaa useRef 
1.declare dulu variablenya  mis const myCathRef = useRef()
2.buat useEffect utk ambil prubahannya pas dirender diambil adlaah current 
useEffect(()=> {
  MyCatchRef.current.focus
},[myCatchRef])
3. di bagain jsz  ini adalah bagian yg mana ini ueRefnya apakah utk input kah 
dll dalam hal ini diambil utk tangkap input maka taruh useRef pada input tsb 
sbb:
<input type="text" ref={MyCathcRef}
jadi ingat jangalupa manaruh ref = atribute pada input html,echkbox dll 
gyg patinya sperti itulah kerjanya 
*/

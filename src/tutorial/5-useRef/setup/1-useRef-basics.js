import React, { useEffect, useRef } from "react"

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

/*
jadi sebenarnya utk apa useRef itu ?
jadi sebenarnya useRef ini tidak sama dgn element.target.value 
dimana re-render perbaharui value ,jadi bebas dari control kita sndir ygreferensilan 
atribut ref padanya 
nah dgn useRef ini kita sudah beri inisial value dulu pada inputBox atau element2 di html tsb
nah cara ambilnya adalah pada saat "current" yg artinya saat sekeang maka itu diambil crruent.value
nah 

*/

const UseRefBasics = () => {
  //jadi tidak ada useState kita kasih nilai '' awal
  //kalau mau ganti gak ada set tapi di current.value nya diganti
  //prubahan statenya berubah karena adanya useEffect!
  //dibagian jsx jangan lupa propsnnya pake ref={}
  const refContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer)
    console.log("nilai value =", refContainer.current.value)
  }
  //useEffec harus sndiri gak bileh ada dlm function event
  useEffect(() => {
    console.log(refContainer.current)
    refContainer.current.focus()
  }, [refContainer])
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

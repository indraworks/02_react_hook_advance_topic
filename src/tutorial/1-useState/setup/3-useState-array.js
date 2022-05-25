import React from "react"
//ambil data
import data from "../../../data"
const UseStateArray = () => {
  //ingat hook harus ada dalam main function kalau disetup
  const [siswa, setSiswa] = React.useState(data)
  //function remove

  const removeItem = (id) => {
    let newSiswa = siswa.filter((item) => item.id !== id)
    //kita set isi array dgn newSiswa
    setSiswa(newSiswa)
  }

  return (
    <>
      {siswa.map((item) => {
        const { id, name } = item
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })}
    </>
  )
}

export default UseStateArray

/*
point penting adalah utk sbuah event maka harus dgn invoke kalau hendak panggil invoe 
()=> {namaFUnction }


*/

/*
utk data dia kan itu object dalam array 
[{id:1,name:'ndra'},
[{id:2,name:'raska'},
[{id:3,name:'ky'},

]
nah kita mau loop ini supaya gak perlu pakai 
data.id ,data.name ( ini nama data pada saat map 
  dia adalah param variable tsrah namanya  dinsini dikasih nama 
  person 
  nah kita akai desctructive 
  const [id,name] = person
  )
button ada 2 button remove utk remove melak=lui filter base id 
button utama utk set array diset jadi [] blamk total sclear list /tak ada list 

*/

/*
utk remve button pakai class item berikut ini :
.item {
  background: var(--clr-white);
  display: flex;
  justify-content: space-between;
  max-width: var(--fixed-width);
  margin: 2rem auto;
  align-items: center;
  border-radius: var(--radius);
}
.item button,
.item a {
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  letter-spacing: var(--spacing);
  cursor: pointer;
}
.item {
  padding: 1rem 2rem;
}
.item h4 {
  margin-bottom: 0;
}
.item p {
  margin-bottom: 0;
}



*/

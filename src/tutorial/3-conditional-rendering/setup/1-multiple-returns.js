import React, { useState, useEffect } from "react"
const url = "https://api.github.com/users/QuincyLarsons"

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState("default User")

  //kita pakai useEffect utk fecth
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json()
        } else {
          setLoading(false)
          setIsError(true)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  //condisi awal = true

  if (loading) {
    return <h2>Loading....</h2>
  }

  if (isError) {
    return <h2>Error...</h2>
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  )
}

export default MultipleReturns

/*
jadi gini kit abutuh conditioanl rendering itu biasanya 
ketika lagi fetching nah ktika loading data dari server maka 
kita beri animasi atau jalankan animas 
conditional ini kita buat true ,nah ketika sudah afalse atrinya data samoai 
pada client maka kita buat false 

nah kit abuat 3 bagian jika saat loading data kita buat true 
pada saat salah alamant atau eror kita hidupkan error atau setErrornya
jika benar datanyanya maka tampilkan 


*/

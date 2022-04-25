import React, { useState, useEffect } from "react"

const url = "https://api.github.com/users"

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setUsers(data)
    console.log(users)
  }

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <h2>fetch data github users</h2>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <div className='users'>
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>Profile</a>
                </div>
              </li>
            </div>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData

/*
disni kit aakan gunakan useEffect utk fecth data bisa dgn axios 
atau nisa dgn fetch kalau dgn fetch harus 2x :
-ambil sbgai response , 2 ambil sebgai data yaitu response.data atau response.json
disni data yg kita ambil adalah data dari github users

css ny agunaka .users dari global.css

*/

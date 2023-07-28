import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


export default function User() {
  const [data,setData] = useState()
  const location = useLocation()
  const queryParam = new URLSearchParams(location.search)
  const user_id = queryParam.get('user_id')

  //https://jsonplaceholder.typicode.com/users/2
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users/'+user_id).then(response=>{
      setData(response.data)
      console.log(response.data)
    })
  },[user_id])

  

  return (
    <div>
        <h1>User Details</h1>
        <h2>Name: {data.name}</h2>
    </div>
  )
}

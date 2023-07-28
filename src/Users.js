import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Users() {
 const [data,setData] = useState([])

 useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
        console.log(response.data)
        setData(response.data);
    })
 },[])
  return (
    <div><h1>Users</h1>
    {data.map(item=>(
        <div key={item.id}>
            <Link to={'/user?user_id='+item.id}>{item.name}</Link>
        </div>
    ))}
    </div>
  )
}

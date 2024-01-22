import React, { useEffect,useState } from 'react'
import{useParams} from "react-router-dom"
import axios from "axios"
function Profile() {

    


    let [profile,setProfile]=useState("")
    console.log(profile,"profileeee")
    const {element}=useParams()
    console.log(element,"iddddddd")

    useEffect(
        ()=>{
            axios.get(`https://jsonplaceholder.typicode.com/users/${element}`)
            .then((res)=>setProfile(res.data))
            .catch((err)=>console.log(err))
        }
        ,[])
  return (
    <div>
<h1>{profile.name}</h1>
<h3>{profile.website}</h3>
<h3>{profile.address && profile.address.street}</h3>
    </div>
  )
}

export default Profile
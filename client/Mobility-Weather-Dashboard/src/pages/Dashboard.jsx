import axios from 'axios'
import { useEffect } from 'react'

function Dashboard(){

    useEffect(()=>{
        axios.get('http://localhost:5000/api/test').then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    return <h1>I am A DASHBOARD</h1>
}

export default Dashboard
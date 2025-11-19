import axios from 'axios'
import { useEffect } from 'react'

function Dashboard(){

    useEffect(()=>{
        axios.get('/api/test').then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
}

export default Dashboard
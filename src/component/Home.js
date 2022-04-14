import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
export default function Home() {
   const history = useNavigate();
   const handlelogin= (e)=>{
       history('./login')
   }
   const handlesign=(e)=>{
       history('./signup')
   }
  return (
    <div className='a'>
      <h1>jobportal app</h1>
      <div className='b'>
      <Button onClick={handlelogin} variant="primary">Login</Button>
      <Button onClick={handlesign} variant="primary">Signup</Button>
      </div>


    </div>
  )
}

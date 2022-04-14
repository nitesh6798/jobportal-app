import React,{useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import {JobPortal} from './JobPortal'
import {useNavigate} from 'react-router-dom'
export default function Login() {
    const history =useNavigate()
    const[email,setEmail] =useState('')
    const[password,setPassword] = useState('')
    const handlelogin =(e)=>{
        e.preventDefault()
        const body = {
            userEmail:email,
            userPassowrd:password
          }
      
          let myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(body),
            redirect: "follow",
          };
          fetch("https://us-central1-react-auth-727ef.cloudfunctions.net/api/login", requestOptions)
            .then((response) => response.text())
            .then((result) => {
              const re = JSON.parse(result);
            console.log(re)
            if(re.success===true){
                history('/jobportal')
              
              
            }
            else{
                
            }
              
      })
    .catch((error) => console.log("error", error));


}

  return (
    <div className='c'>
     <Form onSubmit={handlelogin}>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"
    onChange={(e)=>setEmail(e.target.value)}
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"
    onChange={(e)=>setPassword(e.target.value)}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>   

    </div>
  )
}

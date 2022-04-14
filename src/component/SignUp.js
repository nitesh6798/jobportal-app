import React,{useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {JobPortal} from './JobPortal'
export default function SignUp() {
    const history = useNavigate()
    const[error,setError] =useState('')
    const[fn,setFn] =useState('')
    const[ln,setLn] =useState('')
    const[email,setEmail] =useState('')
    const[pass,setPass] =useState('')
    const[con,setCon] = useState('')
    const handleform = (e)=>{
        e.preventDefault()
        if(pass!== con){
            setError("password doesn't match")
        }
        else{
            const body ={
                firstname:fn,
                lastname:ln,
                email:email,
                password:pass
            }
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: JSON.stringify(body),
              redirect: "follow",
            };
            fetch("https://us-central1-react-auth-727ef.cloudfunctions.net/api/signup", requestOptions)
            .then((response) => response.text())
            .then((result) => {
              const re = JSON.parse(result);
              console.log(re)
              if(re.success===true){
                  history('/jobportal')
                
                
              }
              else{
                  setError("error")
              }
      
            
        })
        .catch((error) => console.log("error", error));
        }
        
        
    }
      
  return (
      <>
      <h1 className='a'>SignUp Page</h1>
    <div className='c'>
        {error!==''?<p>{error}</p>:""}
<Form onSubmit={handleform} >
  <Form.Group  >
    <Form.Label>First name</Form.Label>
    <Form.Control type="text" placeholder="first name" 
    onChange={(e)=>setFn(e.target.value)}
    />
  </Form.Group>
  <Form.Group >
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="last name"
    onChange={(e)=>setLn(e.target.value)}
    />
  </Form.Group>
  <Form.Group >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"
    onChange={(e)=>setEmail(e.target.value)} required 
    
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"
    onChange={(e)=>setPass(e.target.value)}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password"
    onChange={(e)=>setCon(e.target.value)}
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
    </>
  )
}

import React,{useState,useEffect} from 'react'
import {Button,Container,Card,Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
export default function JobPortal() {
  const history = useNavigate()
  const [jobprofile,setJobProfile] = useState([])
  useEffect(() => {
    async function fetchuser(){
      let raw = undefined;
      let requestOptions ={
        method:"GET",
        body: raw,
        redirect:'follow'
      }
      const result = await fetch(
        'https://us-central1-react-auth-727ef.cloudfunctions.net/api/jobprofileusers',requestOptions
      )
      let res = await result.json()
      console.log(res)
      setJobProfile(res.data)
    } 
    fetchuser()
  }, []);
  const handlefulldetails =(id,e)=>{
    const value =jobprofile.find((doc)=>doc.id===id)
    console.log(value)
    history(`/profile/${id}`,{state:value})
  }
  const handlerejected =(status,e)=>{
    const value=[];
    jobprofile.forEach((doc)=>{
      if(doc.status===status){
        value.push(doc)
      }
    })
    console.log("rejected case",value)
     history("/rejected",{state:value})
  }
  const handleshort =(status,e)=>{
    const value=[];
    jobprofile.forEach((doc)=>{
      if(doc.status===status){
        value.push(doc)
      }
    })
    history("/shortlisted",{state:value})
  }
  return (

    <>
    {jobprofile.length>0?
    <div className='b'>
           <Button variant="primary"
           onClick={(e)=>handlerejected("rejected",e)}
           >Rejected</Button>
      <Button  variant="primary"
      onClick={(e)=>handleshort("shortlisted",e)}
      >ShortListed</Button>
    </div>:""}
    <Container className='d'>
  <Row>
   {jobprofile.map((profile,index)=>{
     return(
      <Col xs={12} md={4} sm={4} key={profile.id}>
      <Card className="e"
      onClick={(e)=>handlefulldetails(profile.id,e)}
      >
    <Card.Img src={profile.Image} alt={profile.name} />
    <Card.Body>
    <h2 className='f'>{profile.name}</h2>

    </Card.Body>
  </Card>
      </Col>
     )
   })}
  </Row>
</Container>
    </>
  )
}

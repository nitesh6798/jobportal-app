import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { Card,Button } from 'react-bootstrap'
export default function ProfileInfo() {
    const {state} =useLocation();
    const [status,setStatus]= useState("");
    const handleStatus =(status,e) =>{
        console.log(status);
        const body={
            docId:state.docId,
            status:status,
            timestamp:Date.now(),
        };
        fetch(
            `https://us-central1-react-auth-727ef.cloudfunctions.net/api/status-change`,
            {method:"PUT",
            body: JSON.stringify(body),
        }
        )
        .then((res)=>res.json())
        .then((response)=>{
            if(response.success){
                console.log(response);
            }
        })
        .catch((error)=>console.log(error));

    };
    console.log(state);
    return (
        <div className='d'>
            {state !== undefined ? (
                <>
<Card className='e'  >
  <Card.Img  src={state.Image} alt={state.name}/>
  <Card.Body>
   <p>{state.name}</p>
   <p>Select Status</p>
   <div className='f'>
    <Button onClick={(e)=> handleStatus("rejected",e)} variant="primary">Rejected</Button>
    <Button onClick={(e)=> handleStatus("shortlisted",e)} variant="primary">shortlisted</Button>
    </div>
  </Card.Body>

</Card>
                
                </>
            ):(
                ""
                )}
            
        </div>
    )
}
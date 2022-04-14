import React from 'react'
import { useLocation } from 'react-router-dom'
import {Container,Card,Row,Button} from 'react-bootstrap'

export default function ShortListed() {
    const {state} = useLocation();
    return (
        <>
        {state.length> 0?(
            
            <Container className='g'>
                {state.map((details,index) =>{
                    return(
                        <>
  <Row key={details.docId}>
  <Card className='i' >
  <Card.Img src={details.Image} alt={details.name} />
  <Card.Body>
      <h2 className='name'>{details.name}</h2>
    <p>{details.status}</p>
 </Card.Body>
</Card>
  </Row>
                        </>
                    )
                })}

</Container>
        ):(
            <>
            <p>No rejected candidates</p>
            </>
        )}
        </>

    )
}
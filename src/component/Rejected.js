import React from 'react'
import { useLocation } from 'react-router-dom'
import {Container,Card,Row,Button,Col} from 'react-bootstrap'

export default function Rejected() {
    const {state} = useLocation();
    console.log(state)
    return (
     <>
     {state.length>0 ? 
     (<Container>
        <Row>
            {state.map((details,index)=>{
              return(
                <>
                <Col >
                <Card key={details.id}>
        <Card.Img  src={details.Image} />
        <Card.Body>
          <p>{details.name}</p>
           
        </Card.Body>
      </Card>
                </Col>
               </>
              )
       
            })}

        </Row>
      </Container>)
     
     :
     (
         <div>no rejected canditate</div>
     )}
     </>

    )
}
              
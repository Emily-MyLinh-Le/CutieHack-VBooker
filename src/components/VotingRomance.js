import React from 'react';
import '../App.css';
import {Card, Button} from 'react-bootstrap';
import kissquotient from '../images/kissquotient.jpg';
import Odyssey from '../images/odyssey.jpg';
import mobydick from '../images/mobydick.jpg';
function VotingRomance(){
    return(
        <>
        <Card  centered ='true'>
          <Card.Header>The Kiss Quotient</Card.Header>
          <Card.Body>
            <img src={kissquotient}/>
            <Card.Text>
            Stella Lane is a thirty-year old woman with no dating experience. It doesn't help that Stella has Asperger's and French kissing reminds her of a shark getting its teeth cleaned by pilot fish. Her conclusion: she needs lots of practice — with a professional. Which is why she hires escort Michael Phan. 
            </Card.Text>
            
            <Button href="/voting" variant="secondary">Vote</Button>
          </Card.Body>
        </Card>
        
        <Card  centered ='true'>
        <Card.Header>Odyssey</Card.Header>
        <Card.Body>
          <img src={Odyssey}/>
          <Card.Text>
          In the myths and legends that are retold here, Fagles has captured the energy and poetry of Homer's original in a bold, contemporary idiom, and given us an Odyssey to read aloud, to savor, and to treasure for its sheer lyrical mastery.
          </Card.Text>
          <Button href="/voting" variant="secondary">Vote</Button>
        </Card.Body>
      </Card>
      
      <Card  centered ='true'>
          <Card.Header>Hamlet</Card.Header>
          <Card.Body>
            <img src={mobydick}/>
            <Card.Text>
            Moby-Dick is the story of an eerily compelling madman pursuing an unholy war against a creature as vast and dangerous and unknowable as the sea itself. 
            </Card.Text>
            <Button href="/voting" variant="secondary">Vote</Button>
          </Card.Body>
        </Card>
       </>
        
    )
}
export default VotingRomance; 
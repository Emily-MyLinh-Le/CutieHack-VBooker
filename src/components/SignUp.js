import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Form, Button} from "react-bootstrap";


function SignUp() {
    return(
      <>
      <header className ="App-header">
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Enter Username" />
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Form.Group>
          <Form.Label>
          Favorite Category
          </Form.Label>
    
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
          >
            <option value="0">Choose Genre</option>
            <option value="1">Romance</option>
            <option value="2">Non-fiction</option>
            <option value="3">Horror</option>
            <option value="3">Historical</option>
            <option value="3">Fantasy</option>
            
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
        Sign Up
        </Button>
      </Form>
      </header>   
    </>
    );
  
    }  

export default SignUp;
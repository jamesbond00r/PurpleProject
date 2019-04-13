import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import  Call  from './apis/apiCall.js';
import  Put   from './apis/put.js';
import Delete from './apis/Delete.js';
import  Post from './apis/post.js';

class App extends Component {
    render(){
	return(
      
      <div>
 <Navbar bg="dark" variant="dark">
    <Navbar href="#home">Navbar</Navbar>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      
    </Nav>
  </Navbar>

     
        <div>
	
	        
	<Call/>	
	<Delete/>
         </div>
      </div>
      
  )}
}

export default App;

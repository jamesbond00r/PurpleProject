import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import  Call  from './apis/apiCall.js';
import  Put   from './apis/put.js';
import Delete from './apis/Delete.js';
import  Post from './apis/post.js';
import  About from './about.js';

class App extends Component {
    render(){
	return(
      
      <div>
 <Navbar bg="info" variant="dark">
    <Navbar href="#home">Todo List</Navbar>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      
    </Nav>
  </Navbar>

     
        <div className="box">
	<header className="header">
	<div className="header_box"> </div>
	</header>
	<div className="call">        
	<Call/>	
	</div>
	<div className="post">
	<Post/>
	</div>
	<div className="put">
	<Put/>
	</div>
	<div className="delete">
	<Delete/>
	
	</div>
	<div className="about">
	<About/>
	</div>
         </div>
      </div>
      
  )}
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import  Call  from './apiCall.js';

class App extends Component {
    render(){
	return(
      
      <div>
     <Call/>
   

      </div>
      
  )}
}

export default App;

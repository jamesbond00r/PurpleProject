import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import  Call  from './apis/apiCall.js';
import  Put   from './apis/put.js';

class App extends Component {
    render(){
	return(
      
      <div>
     <Call/>
     <Put/>   

      </div>
      
  )}
}

export default App;

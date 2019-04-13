import React, { Component } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';

class Post  extends React.Component {
  constructor(props){
  super(props);
  this.state = {nameFirst:""}

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleChange = event=>{
   this.setState({nameFirst: event.target.value});
	 
 }
  
  handleSubmit(event){
  
  var params = this.state

  var url = "34.204.52.29:3050/"
  var mhc =  {
   method: 'POST',
   headers: {
   'Content-type': 'application/json'},
    body: JSON.stringify(params)
  };
  event.preventDefault();
  var encoded = window.encodeURI(url+mhc)
  
  fetch(encoded)
     .then(res =>{ console.log(res);
            
 }) 
}        

  render(){
         return(
  <div>
        <form onSubmit={this.handleSubmit}>
  <label>
  New Todod:
  <input type="text" value={this.state.value}  onChange={this.handleChange} />
  </label>
  <Button   type="submit">Submit</Button>
  </form>
  </div>
)}}



export default Post;


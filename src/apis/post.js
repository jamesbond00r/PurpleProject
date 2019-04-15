import React, { Component } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';

class Post  extends React.Component {
  constructor(props){
  super(props);
  this.state = {nameFirst:"Rob"}

 
  this.handleSubmit = this.handleSubmit.bind(this);
  } 

 
  
  handleSubmit(event){  
  
  fetch("http://34.204.52.29:3051/",{
	method:'post',
	mode: "cors",
	credentials: "same-origin",
	headers: {
	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	},
	body:JSON.stringify(this.state.nameFirst)}).then(function(res){
	console.log(res);
}).catch(function(error){
console.log(error);});
}
  render(){
         return(
  <div>
  <label>
  New User:
   </label>
  <Button  onClick={this.handleSubmit}  type="submit">Submit</Button>
  
  </div>
)}}



export default Post;


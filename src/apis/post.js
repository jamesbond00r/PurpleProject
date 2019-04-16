import React, { Component } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';

class Post  extends React.Component {
  constructor(props){
  super(props);
  this.state = {nameFirst:"Rob", Des:""}
  
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
   } 

  handleChange(event){
	this.setState({nameFirst:event.target.value});
}

  
  handleSubmit(event){  
  
  fetch("http://34.204.52.29:3052/",{
	method:'post',
	mode: "cors",
	credentials: "same-origin",
	headers: {
	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	},
	body: JSON.stringify(this.state.nameFirst)}).then(function(res){
	console.log(res);
}).catch(function(error){
console.log(error);});
}
  render(){
         return(
  <div>
	<form onSubmit={this.handleSubmit}>
  <label>
  New Task:
	<input type="text"  value={this.state.value} onChange={this.handleChange}/>
   </label>
	
  <Button type="submit">Submit</Button>
  	</form>
  </div>
)}}



export default Post;


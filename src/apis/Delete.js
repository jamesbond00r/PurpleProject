import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Delete  extends React.Component {
	constructor(props){
	super(props);
	this.state = {id:0}
	

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
	this.setState({id:event.target.value});
}	
	
	handleSubmit(event){
	fetch("http://34.204.52.29:3052/",{
	method: "DELETE",
	mode: "cors",
	credentials: "same-origin",
	headers: {
	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	},
	body: JSON.stringify(this.state.id)}).then(function(res){
	console.log(res)
     }).catch(function(error){
	console.log(error);});
}

	render(){
         return(
	<div>
	<form onSubmit={this.handleSubmit}>
	<label>
	 Delete Task By Number:
	<input type="text" value={this.state.value} onChange={this.handleChange}/>
	</label>
	<Button onClick={this.handleSubmit} variant="danger"  type="submit">Delete</Button>
	</form>
	</div>
)}}



export default Delete;

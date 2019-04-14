import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Delete  extends React.Component {
	constructor(props){
	super(props);
	

	
	this.handleSubmit = this.handleSubmit.bind(this);
	}	
	
	handleSubmit(event){
	fetch("http://34.204.52.29:3051/",{
		method: "DELETE",
    }).then(function(res){
	console.log(res);
	}).catch(function(error){
	console.log(error);});
}

	render(){
         return(
	<div>
	<label>
	Random Delete:
	</label>
	<Button onClick={this.handleSubmit} variant="danger"  type="submit">Delete</Button>
	
	</div>
)}}



export default Delete;

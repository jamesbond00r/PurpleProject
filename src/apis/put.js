import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Put  extends React.Component {
	constructor(props){
	super(props);



	this.handleSubmit = this.handleSubmit.bind(this);
	}	



	handleSubmit(event) {
	fetch("http://34.204.52.29:3051/",{
		method:'PUT',
		mode: "cors",
		credentials: "same-origin"}).then(function(res){
		console.log(res);
	}).catch(function(error){
	console.log(error);});
	
    }

	render(){
         return(
	<div>
        
	<label>
	Random User Update:
	</label>
	
	<Button onClick={this.handleSubmit}  variant="success"  type="submit">Put/Update</Button>
	
	</div>
)}}



export default Put;

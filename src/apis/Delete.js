import React, { Component } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';

class Delete  extends React.Component {
	constructor(props){
	super(props);
	this.state = {id:0}

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}	

	handleChange = event=>{
	 this.setState({id: event.target.value});
	}
		
	

	handleSubmit(event){
	event.preventDefault();
	alert(this.state.id)
	axios.delete("http://34.204.52.29:3050/delete", {body: { id:this.state.id}}
		)
	   .then(res => {
            console.log(res);
            console.log(res.data);
	
         })
    }

	render(){
         return(
	<div>
        <form onSubmit={this.handleSubmit}>
	<label>
	Person ID:
	<input type="text" value={this.state.value}  onChange={this.handleChange} />
	</label>
	<Button variant="danger"  type="submit">Delete</Button>
	</form>
	</div>
)}}



export default Delete;

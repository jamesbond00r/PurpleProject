import React, { Component } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';

class Delete  extends React.Component {
	constructor(props){
	super(props);
	this.state = {value:0}

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}	

	handleChange = event=>{
	 this.setState({value: event.target.value});
	}
		
	

	handleSubmit(event){
	event.preventDefault();
	alert(this.state.value)
	axios.delete("http://34.204.52.29:3050/", {body: { value:this.state. value}}
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
	<button type="submit">Delete</button>
	</form>
	</div>
)}}



export default Delete;

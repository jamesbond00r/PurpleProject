import React, { Component } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';

class Put  extends React.Component {
	constructor(props){
	super(props);
	this.state = {name:"", num:''}

	this.handleidChange = this.handleidChange.bind(this);
	this.handleNameChange = this.handleNameChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}	

	handleidChange=event=>{
	 this.setState({num:event.target.value});
	}
	handleNameChange =event=>{
	this.setState({name:event.target.value});
	}

	handleSubmit(event){
	event.preventDefault();
	alert(this.state.name)
	alert(this.state.num)
	axios.put(`http://34.204.52.29:3050/put${this.state.name}${this.state.num}`)
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
	Name ID:
	<input type="text" value={this.state.value} onChange={this.handleidChange} />
	</label>
	<label>
	Person Name Change:
	<input type="text" value={this.state.value}  onChange={this.handleNameChange} />
	</label>
	<Button variant="success"  type="submit">Put/Update</Button>
	</form>
	</div>
)}}



export default Put;

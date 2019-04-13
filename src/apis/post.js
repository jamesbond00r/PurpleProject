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
	event.preventDefault();
	 const user = {
		name: this.state.name
	};
	alert(this.state.nameFirst)
	axios.post(`http://34.204.52.29:3050/post/${user}`)
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
	Person Name:
	<input
	 type="text"
	 value={this.state.value}
	 onChange={this.handleChange} />
	</label>
	<Button type="submit">Add/Post</Button>
	</form>
	</div>
)}}



export default Post;

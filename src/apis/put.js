import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Put  extends React.Component {
	constructor(props){
	super(props);
	this.state = {id:0, name: ''}


	this.handleIdChange = this.handleIdChange.bind(this);
	this.handleNameChange = this.handleNameChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}	

	handleIdChange(event){
	this.setState({id:event.target.value});
	}
	handleNameChange(event){
	this.setState({name:event.target.value});
}

	handleSubmit(event) {
	var name = {}
	name[0] = this.state.name
	name[1] = this.state.id
	var combo = name
	fetch("http://34.204.52.29:3051/",{
	method:'put',
	mode: "cors",
	credentials: "same-origin",
	headers: {
	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	},
	body: JSON.stringify(name)}).then(function(res){
	console.log(res);
	}).catch(function(error){
	console.log(error);});
	}

	render(){
         return(
	<div>
        <form onSubmit={this.handleSubmit}>
	<label>
	 Name Update:
	</label>
	<input type="text"  onChange={this.handleNameChange}/>
	<label>
	Id please
	</label>
	<input type="text"  onChange={this.handleIdChange}/>
	<Button  variant="success"  type="submit">Put/Update</Button>
	</form>
	</div>
)}}



export default Put;

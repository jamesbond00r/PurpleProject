import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
 constructor(props){
   super(props);
	//set state value to empty string
    this.state = {value: ''};

    //binds the handleChange and handleSubmit to  the  constructor
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

    //handleChange takes in event from fourm and sets state to
    //the event value
    handleChange(event) {
    this.setState({value: event.target.value});
   }

    //handleSubmit function  performs acction after submit and 
    // prevents the auto refresh of the page
    handleSubmit(event) {
     alert('The name submitted was: ' + this.state.value);
    event.preventDefault();
}
  render() {
    return (
      <div>
	<form onSubmit={this.handleSubmit}>
	 <label>
		Name:
	  	<input type="text" value={this.state.value}
	onChange={this.handleChange} />
	</label>
 	<Button type="submit" value="submit">Submit</Button>
</form>

      </div>
    );
  }
}

export default App;

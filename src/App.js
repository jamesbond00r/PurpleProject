import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
 constructor(props){
   super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }
    handleChange(event) {
    this.setState({value: event.target.value});
   }
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

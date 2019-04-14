

import React, { Component } from 'react';
import axios from "axios";

class Call extends React.Component {
 //add some state   
 state = {
        error: null,
        isLoaded: false,
        users:[]
    };
       //Add api in componentDidMount to make sure the 
       // app loaded before making api call
	componentDidMount(){
    axios.get("http://34.204.52.29:3051")
	.then( result => result.data)
	.then(result => JSON.stringify(result).split("{"))
	.then(users =>{
          this.setState({
            isLoaded: true,
            users: users
          })
    }, 
        error => {
            this.setState({
            isLoaded: true,
            error
            });
         }
        );
       }

    render(){
     const { error, isLoaded, users } = this.state;
       //if there is an error load the error message
       if (error) {
        return <div>Error: {error.message}</div>;
       }
        //If the component is slow to mount show a loading screen for now
           else if (!isLoaded){  
               return <div>Loading...</div>;
      }
         //if everything works load the information into the  UI
           else {
           return(
	<ul>
	<h1>Random Users</h1>
	{this.state.users.map(user=>
	
	<li key={user}
>{user.replace(/"first_name"/gi,"Name" )}</li>
)}
		 
         </ul>
               
);}
}}

export default Call;



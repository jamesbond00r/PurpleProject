
import React, { Component } from 'react';
import axios from "axios";

class Call extends React.Component {
 //add some state   
 state = {
        error: null,
        isLoaded: false,
        items: []
    };
       //Add api in componentDidMount to make sure the 
       // app loaded before making api call
	componentDidMount(){
    axios.get("http://34.204.52.29:3001/").then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.data
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
     const { error, isLoaded, items } = this.state;
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
              <div>
               <div>
              {items}
                </div>
           
         </div>
);}}}

export default Call;


import React, { Component } from 'react';
import axios from "axios";

class Put extends React.Component {
    state = {
	error: null,
	isLoaded: false,
	items: []
};

	componentDidMount(){
    axios.put("http://34.204.52.29:3001/", "hi").then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
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
     if (error) {
        return <div>Error: {error.message}</div>;
       }
           else if (!isLoaded){  
               return <div>Loading...</div>;
      }
           else {
           return(
              <div>
               <div>
              {items}
                </div>
            ))}
         </div>
);}}}

export default Put;

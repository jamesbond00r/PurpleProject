
import React, { Component } from 'react';
import axios from "axios";

class Call extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
    };

	componentDidMount(){
    axios.get("http://34.204.52.29:3001/").then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.data
          }).catch(function(error) {
          console.log('What happened? ' + error.response.data)});
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

export default Call;


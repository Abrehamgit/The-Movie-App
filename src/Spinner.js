 import React,{Component} from 'react';
 import Loader from 'react-loader-spinner'
 export default class App extends Component {
    render() {
     return(
      <Loader 
         type="ThreeDots"
         color="#006bb3"
         height="100"	
         width="100"
      />   
     );
    }
 }
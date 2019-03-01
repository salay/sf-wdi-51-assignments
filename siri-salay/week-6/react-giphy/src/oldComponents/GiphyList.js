import React, { Component } from "react";
//import Searchbar from "./SearchBar";
//import Giphy from "./Giphy";
import axios from 'axios';

class GiphyList extends Component {

  state = {
    giphyURL: "",
    newArray: []
 };





  displayGifs = () =>
  {
    let urlArray = [];
   
   const giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
   var searchText = "dogs";
   const key = '&api_key=B8mP31D9bIFjhfWvUap2TDtR5PImqLev&limit=25';
  // http://api.giphy.com/v1/gifs/search?q=dogs&api_key=B8mP31D9bIFjhfWvUap2TDtR5PImqLev&limit=25
   
  
  axios.get(giphyUrl + searchText + key) 
   //.then(response => console.log(response))
  
   .then(response => {

    for (var i = 0; i < response.data.data.length; i++) {
      let gifSource = response.data.data[i].images.downsized.url;
      this.state.urlArray.push(gifSource)}

     console.log(response.data.data)
    
    this.setState({
      newArray:response.data.data
    })


     }
     ,

    //  this.setState({
    //   newArray: urlArray
    //   }),

      console.log(this.state.newArray),

   )
   .catch(err => console.log(err))
  }





    render() {
      
        if(this.state.newArray.length != 0) {
          console.log(this.state.newArray);
        }
        let gifArray = [];
        // let gifArray = this.state.newArray;
        // console.log(gifArray)
      
      for (let index = 0; index < this.state.newArray.length; index++) {
        gifArray.push( <img src={this.state.newArray[index].images.downsized.url} alt=""> </img> );
      }

      return (
        <div>

        <button onClick={this.displayGifs}>clickMe</button>

        {gifArray}
        </div>
      )
     
    }
  }
  
  export default GiphyList;
   
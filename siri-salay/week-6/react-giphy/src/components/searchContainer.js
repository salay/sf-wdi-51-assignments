import React, { Component } from "react";

import Search from "./search"
import axios from 'axios';



class SearchContainer extends Component {
    state = {
        query: "puppies"
    }


    render() {
        return(
            <div> 
            <Search onInput={this.onInput}/>
            <div>
                put gifs in here
                <h3>{this.state.query}</h3>
            </div>
            </div>
        )
    }
  }
  
  export default SearchContainer;
   
import React, { Component } from "react";

class Search extends Component {
    state = {
        query: 'hi'
    }

    searchForThis = (e) => {
        console.log("search works")
       
    }


    render() {
    return(
        <div>
            <h1>{this.state.query}</h1> 
            <input 
                id="searchtext"
                type="text" 
                // onKeyUp={props.onInput}
                />
            <button onClick={this.searchForThis}>  Submit  </button>
            
            
        </div>
    )
    }
}

export default Search;
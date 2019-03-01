import React, { Component } from "react";

class SearchBar extends Component {
    render() {
    return(
        <div>
            <input 
                type="text" 
                // onKeyUp={props.onInput}
                />
            <button>  Submit  </button>
        </div>
    )
    }
}

//this.props.setGifs(gifImages);

export default SearchBar;
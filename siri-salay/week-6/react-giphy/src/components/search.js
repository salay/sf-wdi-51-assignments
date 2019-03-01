import React from "react";

//make search a constant you can export
//set equal to a function that takes an object called props as a parameter

//class component vs functional compnent

//you don't need this functional component to do to much 
// (like inherit all of Component if it were a class)
//when you're not changing the state, (NO STATE IN HERE), use functional
//functional is stateless/"variableless"

const Search = function(props) {
    //this is javascript? that is being converted to jsx? (look up later)
    return(
        <div>
            <form onSubmit={props.onInput}>
            <input 
                type="text" 
                placeholder="Search here"
                //when you type a key, then set a property of props equal to onInuput.
                //onKeyUp={props.onInput}
                //look into searchcontainer for why onInput logs each key that you type onkeyup
            />
            <button type= "submit"> click me to search Gifs! </button>
            </form>
        </div>
    )
}

export default Search;






















// class Search extends Component {
//     state = {
//         query: 'hi'
//     }

//     searchForThis = (e) => {
//         console.log("search works")
       
//     }

    


//     render() {
//     return(
//         <div>
//             <h1>{this.state.query}</h1> 
//             <input 
//                 id="searchtext"
//                 type="text" 
//                 //onKeyUp={props.onInput}
//                 />
//             <button onClick={this.searchForThis}>  Submit  </button>
            
            
//         </div>
//     )
//     }
// }

// export default Search;
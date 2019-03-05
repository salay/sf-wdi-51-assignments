import React, { Component } from "react";

import Search from "./search"
import axios from 'axios';
import Results from "./results"


class SearchContainer extends Component {
    state = {
        query: "puppies",
        gifArray: [],
        limit: 10
    }


    search = () => {
        axios.get('http://api.giphy.com/v1/gifs/search', {
            params: {
                api_key:'jLRvlnP8XNkx7nW7LIDVjWC8giYe9Yzw',
                q:this.state.query,
                limit: this.state.limit
            }
        })
        .then((res) => {
            this.setState({
                gifArray: res.data.data
            });
        })
    }
    

    handleSearch = (event) => 
        {
        //the target value of the input is every key that is typed!
        event.preventDefault();
        event.persist()
        this.setState({
            query: event.target[0].value
        })
        
    }

    loadMore = (e) =>
    {
        e.preventDefault();
        this.setState({
            limit: this.state.limit+10,
        })
        this.search();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.query !== this.state.query){
            this.search();
        }
    }




    render(){
        let results;
        if(this.state.gifArray){
            results = this.state.gifArray.map((result) => {
                return (
                    <div>
                        <Results
                            result={result}
                            key={result.id}
                        />
                    </div>
                )
            })
        }
        return(
            <div>
            <Search onInput={this.handleSearch}/>
            {results}
            <button onClick={ this.loadMore }>Load more Gifs </button>
            </div>
        )
    }
}
  
  export default SearchContainer
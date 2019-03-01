import React, { Component } from "react";
import CounterList from "./CounterList"

class Header extends Component {


  state = {
    numberOfCounters: this.props.count
};
  
  handleIncrement = () => {
    console.log("you pressed + !")
    // this.props.increaseCounters()
  }

  handleDecrement = () => {

    console.log("you pressed - !")
    // this.props.countersCount > 0 ?
    //   this.props.decreaseCounters():
    //   null
  }

  render() {
  return (
     <div> 
        <div> 
            <header className="App-header">
              <h1 className="App-title">React Counters</h1>
              </header>
        </div>
        <div> 
            <CounterList counter={this.props.counters}/>
        </div>
    </div>
  );
}
}

export default Header;
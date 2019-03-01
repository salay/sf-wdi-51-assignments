import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";
import "./button.css"

class App extends Component {
   state ={
      listCounter: 0
     };

increaseCounter = () => {
 this.setState ({
   listCounter: this.state.listCounter + 1
 })
}

decreaseCounter = () => {
  if(this.state.listCounter > 0){
    
    this.setState ({
   
    listCounter: this.state.listCounter - 1
  })
}

}


  render() {
    return (
      <div className="App">
        <Header />
        <h1 id="counter">{this.state.listCounter}</h1> 
        <button id ="addbutton" onClick={ this.increaseCounter }>+</button>
        <button id ="subbutton" onClick={ this.decreaseCounter}>-</button>
        <CounterList theMainCounterTHING ={this.state.listCounter} />
      </div>
    );
  }
}

export default App;

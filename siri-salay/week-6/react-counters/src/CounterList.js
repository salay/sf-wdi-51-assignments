
//have an array containing counters here
// when + is clicked, array.push
// when - is clicked, array.pop

//counter needs "counter: " + variable that counterVar
// 2 buttons tied to counterVar
// one that decrements, one that increments


import React, { Component } from "react";
import Counter from "./Counter";

class ContainerList extends Component {
  render() {
    let counters = [];

    //I do not understand why you need an array
    //when push always pushes just one
    
    for (let index = 0; index < this.props.theMainCounterTHING; index++) {
      counters.push(<Counter />);
    }
    return <div className="Counter-row">{counters}</div>;
  }
}

export default ContainerList;
 
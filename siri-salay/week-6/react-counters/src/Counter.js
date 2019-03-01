import React, {Component} from 'react'

class Beanbags extends Component  {
    state = {
        //state is where you declare your variables
        //don't declare them are var blahblahblah
        //put them here instead
        //declare with variableName: variableValue
        countNumber: 0
    };
   
   

    Increment = () => {
        console.log("you pressed + !")
        this.setState({
            countNumber: this.state.countNumber + 1 
          })
      }
    




  subtract = this.subtract.bind(this);

  //Might want to ask Brock/Isha/Dalton about this next comment....
  //CANNOT use the function keyword below
   //subtract = function() {
  //remember React is not vanilla JavaScript
   


    //You CAN use the code below, or do it with the bind function
        //subtract  = () => {


        subtract() {
          console.log("subtract")
          //want the counter do subtract one
          //use the setState function to set the state of
          //whichever variable you want to change
          //setState is a keyword/hardcoded funciton in React
          this.setState({
              //in here you will the state of the counter
              // you know to do that because you know it's in setState
            

              //setting a variable in React is different than Javascript
            //to set a variable in react, you have to use variable:operation instead
           // of variable = operation
             countNumber: this.state.countNumber -1 
          });
      }



 

    

    render () {
        //var countNumber = 8;
      return (
      <div className="Counter">

        {/* Now think about where you want variables to be in your HTML */}
        
        {/*to get a variable in count, you don't need to use Javascript to
        get an elementbyID or anything b/c you have state variables!
      use the state variable here*/}
        <div>Counter: {this.state.countNumber} </div>

        <button id="subtract" onClick={this.subtract}>Decmenent</button>
        <button id="add" onClick={this.Increment}>Increment</button>

          {/*after you add the onclicks, remember that you never declared
        any functions. so the onclicks do not know what to do YET...
         make the functions above render()*/}
        
        </div>

      )
    }
  }

export default Beanbags

//this tell it exactly which class to export. check on this. probably right. 

// why was this working when this was Comment?


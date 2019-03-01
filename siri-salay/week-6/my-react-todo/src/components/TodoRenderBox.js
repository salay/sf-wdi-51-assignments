import React, {Component} from 'react'
import Todo from './Todo'

class Todos extends Component {
  render(){
    let allTodos = this.props.displayTodos.map( (todoArr) => {
      return (
        <Todo
          key={todoArr._id}
          todo={todoArr}
          //Sprint 5: added deleteToto line
          deleteTodo={this.props.deleteTodo}/>
      )
    })

    return(
      <ul>
        {allTodos}
      </ul>
    )
    
  }
}

export default Todos
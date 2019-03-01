import React, {Component} from 'react'

class Todo extends Component {
    constructor() {
        super();
      }
      deleteClickedTodo = () => {
        this.props.deleteTodo(this.props.todo);
      }
  render(){
      console.log(this.props.todo._id)
    return(
      <li data-index-of-todoArr={this.props.todo.id}>
        <span>{this.props.todo.body}</span>
        <a
          className='remove'
          onClick={this.deleteClickedTodo}>
          Remove
        </a>
      </li> 
    )
  }
}

export default Todo
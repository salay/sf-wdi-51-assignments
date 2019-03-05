import React, {Component} from 'react'
import TodoForm from './TodoForm.js'

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            formStyle: {display: 'none'}
          }
      }
      deleteClickedTodo = (e) => {
          e.preventDefault();
        this.props.deleteTodo(this.props.todo);
      }


      toggleBodyForm = () => {
          
        (this.state.formStyle.display === 'block')?
          this.setState({formStyle: {display: 'none'}, bodyStyle: {display:'block'} })
        :
          this.setState({formStyle: {display:'block'}, bodyStyle: {display: 'none'}})
        
      }

  render(){
      console.log(this.props.todo._id)
      return(
        <li data-todos-index={this.props.todo.id}>
        {/* style={this.state.bodyStyle} */}
          <div style={this.state.bodyStyle}>
            <span >
              {this.props.todo.body}</span>
            <a
              className='edit' 
              onClick={this.toggleBodyForm}>
              Edit
            </a>
            <a
              className='remove' 
              onClick={this.deleteClickedTodo}>
              Remove
            </a>
          </div>
          <TodoForm 
            todo={this.props.todo}
             //style={{color: 'pink'}}
             style={this.state.formStyle}
            autoFocus={true}
            buttonName="Update Todo!"
            updateTodo={this.props.updateTodo} 
            toggleBodyForm={this.toggleBodyForm} />
        </li> 
      )
  }
}

export default Todo





// //Todo.js
// //...
// { this.props.editingTodoId === this.props.todo._id ? 
//     <TodoForm
//       autoFocus={true}
//       onUpdateTodo={this.props.onUpdateTodo}
//       buttonName="Update Todo!"/> : '' }
//   )
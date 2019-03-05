//TodoForm.js
import React, {Component} from 'react'

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
        todo: 'jello'
      }
  }

  onChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  onSubmit = (event) => {
      
    event.preventDefault()
    event.persist()
    var todo = this.state.todo
    console.log(todo)
    console.log(event)
    console.log(event.target[0].value)
    // "jello"
    this.props.updateTodo(todo)
    this.setState({
      todo: event.target[0].value
    })
    console.log(this.state.todo)
    //undefined??
  }

  render(){
    return (
      <div style={this.props.style} className='todoForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder='Write a todo here ...'
            type='text'
            value={(this.state && this.state.todo) || ''} />
          <button type='submit'>Save</button>
        </form>
      </div>
    )
  }
}

export default TodoForm
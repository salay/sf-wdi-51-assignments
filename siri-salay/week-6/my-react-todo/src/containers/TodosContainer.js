// import React, { Component } from 'react'

// import TodoModel from '../models/Todo'

// class TodosContainer extends Component {
//   render(){
//     TodoModel.allEndpoints().then( (response) => {
//       console.log(response);
//     })
//     return (
//       <div className='todosContainer'>
//         <h2>This is the todos container</h2>
//       </div>
//     )
//   }
// }

// refactored below:


import React, {Component} from 'react'
import TodoModel from '../models/TodoModel'
import TodoRenderBox from '../components/TodoRenderBox'
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    TodoModel.allEndpoints().then( (res) => {
      this.setState ({
        todos: res.data.todos,
        
      })
    })
  }

  createTodo = (todo) => {
    let newTodo = {
        body: todo,
        completed: false
    }
    TodoModel.create(newTodo).then((res) => {
        let todos = this.state.todos
        let newTodos = todos.push(res.data)
        this.setState({newTodos})
    })
}



  // After the todo delete response is sent back from the server, we find the corresponding entry for the todo in our todos state array and remove it.
  deleteTodo = (todo) => {
    TodoModel.delete(todo).then((res) => {
        let todos = this.state.todos.filter(function(todo) {
          return todo._id !== res.data._id
        });
        this.setState({todos})
    })
}


  render(){
    return (
      <div className="todosComponent">
        <TodoRenderBox
          displayTodos={this.state.todos} 
          //Sprint 5: added deleteTodo line below
          deleteTodo={this.deleteTodo}
          />
          <CreateTodoForm
        createTodo={ this.createTodo }
        />
      </div>
    )
  }
}

export default TodosContainer
import axios from 'axios'

class TodoModel {
  static allEndpoints(){
    let request = axios.get(`https://super-crud-api.herokuapp.com/api/todos`)
    return request
  }
  static create(todo) {
    let request = axios.post(`https://super-crud-api.herokuapp.com/api/todos`, todo)
    return request
  }
  static delete(todo){
    let request = axios.delete(`${`https://super-crud-api.herokuapp.com/api/todos`}/${todo._id}`)
    return request
  }
  static update(todo, updatedInfo){
    let request = axios.put(`${`https://super-crud-api.herokuapp.com/api/todos`}/${todo._id}`, updatedInfo)
    return request
  }
}




export default TodoModel
/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = [];
  }
  add(todo){
    // console.log();
    // let index = this.todos.length+1;
    this.todos.push(todo);


  }

  remove(index){
    // let todo_to_be_removed = this.todos.find(todo => todo.index === index)
    // this.todos = this.todos.filter(todo => todo.index!==index);
    this.todos.splice(index,1);
  }

  get(index){
    // return this.todos.find(todo ;
    if(index<this.todos.length){
      return this.todos[index]
    } return null
  }

  update(index,updatedTodo){
    // let newTodo = get(index)
    // newTodo.todo = updatedTodo;
    if(index<this.todos.length){
      this.todos[index] = updatedTodo
    }
  }

  getAll(){
    return this.todos;
  }
  
  clear(){
    this.todos = [];
  }
}

module.exports = Todo;

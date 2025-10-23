class TodoList {
  constructor() {
    this.todos = [];
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
  getTodos() {
    return this.todos;
  }

  markTodoAsCompleted(index) {
    this.todos[index].completed = true;
  }
}

export default TodoList;

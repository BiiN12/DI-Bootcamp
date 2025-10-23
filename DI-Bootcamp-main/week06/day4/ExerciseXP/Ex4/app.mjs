import TodoList from "./todo.mjs";

const todoList = new TodoList();

todoList.addTodo({ title: "Task 1", completed: false });
todoList.addTodo({ title: "Task 2", completed: true });
todoList.addTodo({ title: "Task 3", completed: false });

console.log(todoList.getTodos());

todoList.markTodoAsCompleted(2);

console.log(todoList.getTodos());

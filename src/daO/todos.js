let todos = [
  {
    id: 1,
    value: 'Get the morning paper'
  },
  {
    id: 2,
    value: 'Do the assignment'
  }
];

const fetchAll = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(todos), 500);
  });
};

const getTodoById = id => {
  return new Promise((resolve, reject) => {
    const todo = todos.find(todo => todo.id.toString() === id);
    resolve(todo);
    if (!todo) reject(todo);
  });
};

const addTodo = newTodo => {
  return new Promise((resolve, reject) => {
    todos.push(newTodo);
    resolve(todos);
  });
};

const deleteTodo = id => {
  return new Promise((resolve, reject) => {
    const newTodos = todos.filter(todo => todo.id != id);
    todos = newTodos;
    resolve();
  });
};

const updateTodo = (id, value) => {
  return new Promise((resolve, reject) => {
    const newTodoIndex = todos.findIndex(todo => todo.id == id);
    todos[newTodoIndex].value = value;
    resolve(todos);
  });
};
export { fetchAll, getTodoById, addTodo, deleteTodo, updateTodo };

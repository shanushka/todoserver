import * as todoDao from '../daO/todos';

const getTodos = () => {
  return todoDao.fetchAll();
};

const getTodosByID = id => {
  return todoDao.getTodoById(id);
};

const addTodo = newTodo => {
  return todoDao.addTodo(newTodo);
};

const deleteTodo = id => {
  return todoDao.deleteTodo(id);
};

const updateTodo = (id,value) => {
  return todoDao.updateTodo(id,value)
}
export { getTodos, getTodosByID, addTodo, deleteTodo ,updateTodo};

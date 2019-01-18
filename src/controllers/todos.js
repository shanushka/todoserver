import { Router } from 'express';

import * as todoServices from '../services/todos';
import * as validators from '../middleware/validators';

const todoController = Router();

todoController.get('/', (req, res, next) => {
  todoServices
    .getTodos()
    .then(todo => res.json({ data: todo}))
    .catch(err => next(err));
    
});

todoController.get('/:id', (req, res, next) => {
  todoServices
    .getTodosByID(req.params.id)
    .then(todo => res.json({ data: todo }))
    .catch(err => next(err));
});

todoController.post('/',validators.validate,(req, res, next) => {
  todoServices
    .addTodo(req.body)
    .then(todo => res.json({ data: todo }))
    .catch(err => next(err));
});

todoController.delete('/:id', (req, res, next) => {
  todoServices
    .deleteTodo(req.params.id)
    .then(res.json({ msg: 'deleted' }))
    .catch(err => next(err));
});

todoController.put('/:id',validators.validate,(req,res,next) =>{
  todoServices.updateTodo(req.params.id,req.body.value)
  .then(todo => res.json({data:todo}))
  .catch(err => next(err));
})



export default todoController;

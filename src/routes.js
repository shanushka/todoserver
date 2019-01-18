import { Router } from 'express';

import todoController from './controllers/todos'
let router = Router();

router.get('/', (req, res) => {
  res.json({
    text: 'hello'
  });
});

router.use('/todos',todoController)

export default router;

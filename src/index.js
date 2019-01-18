import express from 'express';
import bodyParser from 'body-parser';

import Routes from'./routes.js';
import * as errorHandler from './middleware/errorHandler';

const app = express();
const port = 8840;

app.use(bodyParser.json());
app.use('/api', Routes);

//app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.errorHandler);
//app.use()
app.listen(port,()=>console.log(`welcome to express on ${port}`))

//Routes
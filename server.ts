import dotenv from 'dotenv';

import express from 'express';
import { UserCtrl } from './controllers/UserController';
import './core/db'
import { registerValidations } from './validations/register';

dotenv.config();

const app = express();


app.use(express.json())

app.get('/users', UserCtrl.index);
app.post('/users', registerValidations,  UserCtrl.create);
// app.patch('/users', UserCtrl.update);
// app.delete('/users', UserCtrl.delete);

app.listen(8888, () =>{
    console.log('server is RUNNING');
})
import express from 'express';

const app = express();

app.get('/users');

app.listen(8888, () =>{
    
    console.log('server runned');
})
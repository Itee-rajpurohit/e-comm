const express = require('express');

const app = express();

app.use(express.json());

const todoRoutes = require('./routes/todoRoutes');

app.use('/api/todos', todoRoutes);

console.log(todoRoutes);

app.get("/",async(req,res)=>{
    res.send("HEllo Chai");
})


module.exports = app;
const todo = require('../models/todo');

//create Todo

exports.createTodo = async(req,res)=>{
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

//Get All Todos
exports.getTodos = async(req,res)=>{
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
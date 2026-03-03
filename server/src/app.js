const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('../src/routes/auth.routes')
const productRoutes = require("../src/routes/product.router")

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));

app.use(express.json()); //middleware jo backend ko json format m data deta h 
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);



module.exports = app;
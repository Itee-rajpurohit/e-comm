require('dotenv').config();
const app = require('./src/app');
const connectDb = require('./src/db/db');

connectDb();

PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})


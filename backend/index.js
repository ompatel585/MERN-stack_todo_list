const express = require('express');
require('dotenv').config();
require('./Models/db.js')
const taskRouter = require('./Routes/TaskRouter.js');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/',(req,res) =>{
    res.send("this is the starting of a new era my friend the era of patel om");
})

app.use(cors())
app.use(bodyParser.json());

app.use('/tasks',taskRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})
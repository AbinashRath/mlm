const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const bodyparser = require('body-parser');
//start app
const app = express();
//connect database
mongoose
 .connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('Database Connected'));

//middlewares
app.use (bodyparser.json());
app.use (cors());

//define port
const port = process.env.PORT||6060;

//listen to the server
app.listen(port, () =>{

    console.log(`server is running on ${port}`)
})
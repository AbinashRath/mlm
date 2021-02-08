//importing all the modules.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();

//import routes
const authRoutes = require('../routes/routes');

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
app.use (bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
//     }));
// app.use (cors());

//routes middleware
app.use('/api', authRoutes);


//define port
const port = process.env.PORT||6060;

//listen to the server
app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})
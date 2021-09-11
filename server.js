const express = require('express');
const morgan = require('morgan')
const path = require('path')
require("dotenv/config")
const bodyparser = require('body-parser');
const app = express();




//Defining PORT
const PORT = process.env.PORT|| 8080;

//Log 
app.use(morgan('tiny'))

//parse request to body-parser
app.use(bodyparser.json);

//View setengine
app.set("view engine","ejs")

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))




app.get('/',(req,res)=>{
    res.render('index.ejs')
    
});

app.listen(PORT,()=>{
    console.log(`Server is Runing on http://localhost:${PORT}`);
})
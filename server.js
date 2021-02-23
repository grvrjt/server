const express = require('express');
const bodyParser = require('body-parser');
const dbConn = require('./dbConnection');
const port = process.env.PORT||3000;
const app = express();
app.use(bodyParser.json());
dbConn.dbConnection((err,dbResult)=>{
    if(err){
        console.log(err)
    }else{
        app.listen(port)
        console.log(`${dbResult} and server is listening at port ${port}`);

    }
})

app.get('/',(req,res)=>{
    res.send(`Hello from server`)
})
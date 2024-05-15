const express = require("express");
const app = express();

// get request
app.get("/",(req,res)=>{
    res.send("Hello Kartik")
});

// listen on port 
app.listen(3000,()=>console.log("I Am Up!!"));

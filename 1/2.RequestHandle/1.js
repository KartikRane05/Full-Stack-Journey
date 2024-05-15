//Req through headers
const express = require("express");
const app = express();

// POST REQUEST 
app.post("/sum",(req,res)=>{
    const a = parseInt(req.headers.a);
    const b = parseInt(req.headers.b);
    const sum = (a + b).toString();
    res.send(sum);
});

//listen 
app.listen(3000,()=>console.log("I AM UP!!!"))
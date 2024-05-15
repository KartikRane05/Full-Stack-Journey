const express = require("express");
const app = express();
// POST REQUEST 
app.post("/sum",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = (a + b).toString();
    res.send(sum);
});

//listen 
app.listen(3000,()=>console.log("I AM UP!!!"))
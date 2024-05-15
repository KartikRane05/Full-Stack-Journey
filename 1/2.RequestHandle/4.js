const express = require("express");
const app = express();
// POST REQUEST 
app.post("/sum/:kartik",(req,res)=>{
    const kartik = req.params.kartik;
    console.log(typeof(kartik));
    res.send(kartik);
});

//listen 
app.listen(3000,()=>console.log("I AM UP!!!"))
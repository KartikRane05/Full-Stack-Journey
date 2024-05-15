const express = require("express");
const app = express();
app.use(express.json());  // for body things
// POST REQUEST 
app.post("/sum",(req,res)=>{
    const a = req.body.a;
    const b = req.body.b;
    const sum = (a + b).toString();
    res.send(sum);
});

//listen 
app.listen(3000,()=>console.log("I AM UP!!!"))
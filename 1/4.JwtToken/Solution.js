const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtpassword = "123456789";
app.post("/get",(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const token = jwt.sign({username:username,password:password},jwtpassword);
    res.send({
        token:token
    })
});
app.get("/check",(req,res)=>{
    const token = req.headers.token;
    const authverify = jwt.verify(token,jwtpassword);
    res.send({authverify:authverify})
});
//listen 
app.listen(3000,()=>console.log("I AM UP!!!"));

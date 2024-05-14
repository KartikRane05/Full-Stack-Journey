const express = require("express");
const app = express();
app.use(express.json());
//auth middleware
function AuthCheck(req,res,next){
    const username = req.body.username;
    const password = req.body.password;
    console.log(typeof(username))
    console.log(typeof(password))
    if(username == "kartik" && password == 12345678){
        next();
    }
    else{
        res.send("Authentication Fails")
    }
}
app.post("/login",AuthCheck,(req,res)=>{
    res.send("Login Successfull")
})
//listen 
app.listen(3000,()=>console.log("I AM UP!!!"));
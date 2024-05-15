const express = require("express");
const app = express();
app.use(express.json());
// concept of middleware here
function AuthMiddleWare(req,res,next){
    const username = req.body.username;
    const password = req.body.password;
    if(username == "kartik" && password == 123456789){
        next();
    }
    else{
        res.send("MiddleWare Fails")
    }
}
app.use(AuthMiddleWare);
app.post("/login",(req,res)=>{
    res.send("Login Successfully");
});

app.listen(3000,()=>console.log("Live"));
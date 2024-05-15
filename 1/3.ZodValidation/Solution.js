const express = require("express");
const app = express();
app.use(express.json());
const zod = require("zod");
const InputSchema = zod.object({
    username:zod.string().email(),
    password:zod.number()
});

function AuthMiddleWare(req,res,next){
    const username = req.body.username;
    const password = req.body.password;
    const response = InputSchema.safeParse({username,password});
    if(response.success){
        if(username == "kartik@gmail.com" && password == 123456789){
            next();
        }
        else{
            res.send("Authentication Fails")
        }
    }
    else{
        res.send("Zod Fails")
    }
}

app.post("/login",AuthMiddleWare,(req,res)=>{
    res.send("Successfully Login")
});

app.listen(3000,()=>console.log("LIVE"));

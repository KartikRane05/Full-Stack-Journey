const jwt = require("jsonwebtoken");
const jwtpassword = "123456789"
const {AdminDB} = require("../DB/Db");
async function AdminMid(req,res,next){
    const token = req.headers.token;
    const tokencheck = jwt.verify(token,jwtpassword);
    const username = tokencheck.username;
    console.log(username);
    const userinfo = await AdminDB.findOne({username:username})
    if(userinfo){
        next();
    }
    else{
        res.send("Middleware Auth Fails")
    }
}

module.exports = {
    AdminMid
}
const jwt = require("jsonwebtoken");
const jwtpassword = "123456789"
const {UserDB} = require("../DB/Db");
async function UserMid(req,res,next){
    const token = req.headers.token;
    const tokencheck = jwt.verify(token,jwtpassword);
    const username = tokencheck.username;
    console.log(username);
    const userinfo = await UserDB.findOne({username:username})
    if(userinfo){
        next();
    }
    else{
        res.send("Middleware Auth Fails")
    }
}

module.exports = {
    UserMid
}
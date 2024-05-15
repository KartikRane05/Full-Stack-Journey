const Router = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const UserZodSchema = require("../ZodValidation/UserZod");
const { UserMid } = require("../MiddleWare/UserMid");
const { UserDB } = require("../DB/Db");
const jwtpassword = "123456789"
// User signup
router.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const response = UserZodSchema.safeParse({username,password});
    if(response.success){
        const user = await UserDB.create({
            username:username,
            password:password
        })
        const token = jwt.sign({username:username,password:password},jwtpassword);
        res.send({msg:"User Created Successfully",userID:user._id,token:token})
    }
    else{
        res.send({msg:"User Creation Fails"})
    }
});

// User Login
router.post("/login",UserMid,async (req,res)=>{
    res.send("User SuccessFully Login")
});

// user purchase the particular course
router.post("/purchase/:courseid",UserMid,async (req,res)=>{
    const courseid = req.params.courseid;
    console.log(courseid);
    const token = req.headers.token;
    const tokencheck = jwt.verify(token,jwtpassword);
    const username = tokencheck.username;
    const userinfo = await UserDB.findOne({username:username});
    console.log(userinfo)
    userinfo.mycourse.push(courseid);
    userinfo.save();
    res.send("Course Purchase Successfully");
});

// user need to see the purchase course only
router.get("/mycourse",UserMid,async (req,res)=>{
    const token = req.headers.token;
    const tokencheck = jwt.verify(token,jwtpassword);
    const username = tokencheck.username;
    const userinfo = await UserDB.findOne({username:username});
    const mycourse = userinfo.mycourse;
    res.send({mycourse:mycourse});
})
module.exports = router;


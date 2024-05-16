const Router = require("express");
const router = Router();
const AdminZodSchema = require("../ZodValidation/Adminzod");
const { AdminDB, CourseDB } = require("../DB/Db");
const { AdminMid } = require("../MiddleWare/AdminMid");
const jwt = require("jsonwebtoken");
const jwtpassword = "123456789"
// admin signup
router.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const response = AdminZodSchema.safeParse({username,password});
    if(response.success){
        const admin = await AdminDB.create({
            username:username,
            password:password
        })
        const token = jwt.sign({username:username,password:password},jwtpassword);
        res.send({msg:"Admin Created Successfully",adminId:admin._id,token:token})
    }
    else{
        res.send({msg:"Admin Creation Fails"})
    }
});

// admin login
router.post("/login",AdminMid,async (req,res)=>{
    res.send("Admin SuccessFully Login")
});

// admin create the course
router.post("/createCourse",AdminMid,async (req,res)=>{
    const title = req.body.title
    const description = req.body.description
    const imagelink = req.body.imagelink
    const price = req.body.price
    const token = req.headers.token;
    const tokencheck = jwt.verify(token,jwtpassword);
    const username = tokencheck.username;
    const course = await CourseDB.create({
        title:title,
        description:description,
        imagelink:imagelink,
        owner:username,
        price:price
    });
    res.send({msg:"Course Created Successfully",courseid:course._id});
});

module.exports = router;

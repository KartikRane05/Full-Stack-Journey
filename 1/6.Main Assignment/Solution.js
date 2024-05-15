const express = require("express");
const app = express();
app.use(express.json());
const { CourseDB } = require("./DB/Db");
const AdminRouter = require("./Routes/AdminRoutes");
const UserRouter = require("./Routes/UserRoutes");
app.use("/admin",AdminRouter);
app.use("/user",UserRouter);
app.get("/allcourse",async (req,res)=>{
    const allcourse = await CourseDB.find({});
    res.send({allcourse:allcourse});
});
app.use((err,req,res,next)=>{
    res.send("GLOBAL CACHE")
});
app.listen(5000,()=>console.log("I am Up!!!!"));

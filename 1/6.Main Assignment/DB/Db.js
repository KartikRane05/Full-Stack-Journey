const mongoose = require("mongoose");
mongoose.connect("ENTER MONGO URL")
.then(()=>console.log("MongoDB Connected"));

// defining the schemas
const AdminSchema = new mongoose.Schema({
    username:String,
    password:Number
});
const UserSchema = new mongoose.Schema({
    username:String,
    password:Number,
    mycourse:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CourseDB"
    }]
});
const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imagelink:String,
    owner:String,
    price:Number
});

const AdminDB = mongoose.model("Admin",AdminSchema);
const UserDB = mongoose.model("User",UserSchema);
const CourseDB = mongoose.model("Course",CourseSchema);

module.exports = {
    AdminDB,
    UserDB,
    CourseDB
}
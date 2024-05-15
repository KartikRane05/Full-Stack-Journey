const express = require("express");
const app = express();
app.use(express.json());
app.post("/",(req,res)=>{
    const data = req.body.array;
    res.send("THE LENGTH OF THE ARRAY IS "+data.length);
});
app.use((err,req,res,next)=>{
    res.send("GLOBAL CACHE HERE")
})
app.listen(3000,()=>console.log("LIVE"));

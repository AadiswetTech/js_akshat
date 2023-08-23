
import express from 'express'
const app=express();
//setting up view engine ejs
app.set("view engine","ejs")
app.get("/",(req,res,next)=>
{
 res.render("index",)
})



app.listen(5000,()=>
{
         console.log("server worked")
})
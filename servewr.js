const express=require('express')
const mongoose=require('mongoose')
require("dotenv").config()
const app=express()
const name=require("./schema")
const dish=require("./schema2")
const port=6000
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    
})
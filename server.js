const express = require('express')

const app = express()



app.get('/',(req,res)=>{
    res.send("server is running successfully...")
})

app.get('*',(req,res)=>{
    res.send("error,,page not found")
})

app.listen(4400,()=>{
    console.log("app running on port 4400")
})
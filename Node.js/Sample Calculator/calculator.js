const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();


app.use(bodyParser.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log(`Server Started listening Port ${port}`);
})

app.get("/",(req,res)=>{
   res.sendFile(__dirname+"/index.html")
})

app.post("/",(req,res)=>{
    const {num1,num2} = req.body;
    res.send(`Additon of  ${num1} and  ${num2} is ${Number(num1)+Number(num2)} `)
})


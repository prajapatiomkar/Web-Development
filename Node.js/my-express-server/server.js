// const express = require("express");
// const  app = express()

// const port = 3000

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// })

// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`)
// })


const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello Omkar</h1>");
})

app.get('/contacts',(req,res)=>{
    res.send("<h1>+91-0000000000</h1>")
})

app.listen(port, () => {
    console.log(`Your App listening on port ${port}`)
})


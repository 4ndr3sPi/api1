const express = require("express");
const app = express();

app.use(express.json());
app.post('/',(req,res)=>{
    var x = req.body.variable1
    var y = req.body.variable2
    var z = x+y
    //res.send({message: x+y })
    //console.log(req.body.variable1);
    res.send({z})
})

app.get('/',(req,res)=>{
    const telefono = "123456"
    
    res.send({telefono})


})

app.get('/nombre',(req,res)=>{
    const nombre = "andres"
    
    res.send({nombre})


})






app.listen(3100);

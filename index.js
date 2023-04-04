const express = require('express');
const date = require('./midelware/date');

const app = express()
const port = 3000


app.use(express.static('Public'));
app.get('/home',(req,res)=>{
    res.sendFile(__dirname + '/Public/home.html')
})

app.get('/outOfService',date , (req,res)=>{
    res.sendFile(__dirname + '/Public/outOfService.html')
})


app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/Public/contact.html')
})



//creation de la 1ere route
app.get('/', (req,res)=>{
    res.send("welcome ")
})

 app.get('/middleware',Date,(req,res,next)=>{
 res.send("the date: " +req.date);
 })
 app.get('/NOmiddleware',(req,res,next)=>{
     console.log(req)
     res.send("the date is "+req.date);
 })



//listen to port 
app.listen(port,(err)=>{
    err? console.log(err): console.log(`go to ${port}`);
})


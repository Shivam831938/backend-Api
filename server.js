console.log("backend");
const express=require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000
  })
);
app.get('/api', function (req, res) {  
    res.json({status:"success",data:"test data"})
 })  
 app.get('/request', function (req, res) {  
    res.json({status:"success",data:"test data2",statusCode:"200"})
 })  
 app.get('/api/sample', function (req, res) {  
    res.json({status:"success",data:[
        {name:"Sikandar",surname:"kumar",Branch:"CSE"},
        {name:"Santosh",surname:"yadav",Branch:"CSE"},
        {name:"Sivam",surname:"Tiwari",Branch:"CSE"},
        {name:"Sikandar",surname:"kumar",Branch:"CSE"},
        ]})
 })  
 app.post('/api/login', function (req, res) { 
    const {name,password} = req.body;
    if(name=="abc" && password=="12345"){
        res.json({status:"success", message:"Login Success"});
      }
      else{
        res.json({status:"false", message:"failed incorrect username nad password"});
      }
 })  

app.listen(3000, function () {
    console.log("Node server listening on port 3000");
  });


  
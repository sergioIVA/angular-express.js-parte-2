const express=require('express');
const RouteArticle=require("./routes/api/article");
const version="/v1";


//used library
const bodyParser=require("body-parser");


// app
const app=express();

//middlewares
app.use(bodyParser.json());

// routes 
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT,PATCH, DELETE, OPTIONS')
  next()
})
app.use(`${version}/articles`,RouteArticle);





const server = app.listen(8080, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
  });

//required packages
const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

//create express server
const app = express();

//server port number
const PORT = process.env.PORT || 3000;

//set template engine 
app.set("views","./public/views");
app.set("view engine", "ejs");

app.use(express.static("public"));

// needed to parse html data for POST Request
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

app.get("/", (req,res)=>{
    res.render("index");
})

app.post("/", (req,res)=>{
    
})

//start the server
app.listen(PORT, () =>{
    console.log(`Server starting in port ${PORT}`);
})
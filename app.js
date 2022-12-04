const express = require("express");
const app = express();
const path = require("path");
// const fs = require("fs");
// const nodemon = require("nodemon");
// const { start } = require("repl");
const port =8000;

app.use('/static', express.static('static'));
app.use(express.urlencoded());

// Set the template engine as pug
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));


app.get("",(req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug',params);

});
app.get("/home",(req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('home.pug',params);

});
app.get("/contact",(req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('contact.pug',params);

});
app.get("/classinfo",(req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('classinfo.pug',params);

});
app.get("/About",(req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('About.pug',params);

});
app.get("/Service",(req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('Service.pug',params);

});

// listening port 
 app.listen(port,()=>{
        console.log(`The application started successfully on port ${port}`)
})


// nodemon start ==> start the terminal
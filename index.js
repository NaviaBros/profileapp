// NPM Packages
const express = require("express");
const https = require("https");
const bodyParser = require ("body-parser");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");
//Mounting bodyParse true:qs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // declare staci directory

//-- START index.HTML
//EXPRESS GET -> path:"/root" 
app.get("/", function(req,res){
    res.render("cover");
});


app.get("/:here", function (req, res) {
    console.log(_.capitalize(req.params.here)) ;
    res.render();
  });

app.get("/experience", function (req, res) {
    res.render("experience");
  });
  
  app.get("/about", function (req, res) {
    res.render("about");
  });

// Listening seervice at 3000 port
app.listen(3000, function(){
    console.log("Server is running");
});


/*  to obtain weather - check APIkey is updated if not responding with postman
app.get("/", function(req,res){
    
    const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=651c4baee745454a9648382d9eacbd16&units=metric";

    https.get(weatherApi, function(res){
        console.log(res.statusCode);

        res.on("data", function(data){
            const weatherData = JSON.parse(data)
            const icon = weatherData.main.temp
            console.log(weatherData);
        });
    });
});
*/
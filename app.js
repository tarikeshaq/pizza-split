var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");

app.get("/landing", function(req, res) {
    res.render("landing", {path: req.path});
});

app.get("/*", function(req, res){
    res.redirect("/landing");
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Started");
})
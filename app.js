var express = require("express");
var app = express();

app.set("view enging", "ejs");

app.get("/", function(req, res) {
    res.send("LANDING PAGE");
});



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Started");
})
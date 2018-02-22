var express = require("express");
var bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 8080;


//------static directory--------------
app.use(express.static('public'));

//----------- models requirement for db syncing ---------------
var db = require("./models");


//----------- express app setup to handle data parsing----------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//----------routes-----------------
require("./routes/email-routes.js")(app);
require("./routes/api-email.js")(app);



//---------- sync sequelize models/port check---------------
db.sequelize.sync().then(function() {
    app.listen(port, function(req, res) {
        console.log("Server is running on port: ", port);
    });
});

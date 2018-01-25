var express = require("express");
var path = require("path");
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');


var app = express();
var port = 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/email-routes.js")(app);

// app.get('/', function(req, res) {
//     res.sendFile('index.html');
// });

// app.post('/send-email', function(req, res) {
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: 'ckontos3@gmail.com',
//             pass: 'Cdkjob3!'
//         }
//     });
//     let mailOptions = {
//         from: req.body.email,
//         to: 'ckontos3@gmail.com',
//         subject: 'Hello',
//         text: req.body.message,
//         html: '<p>' + req.body.message + '</p>'
//     };
//     console.log(req.body.message);
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message %s sent: %s', info.messageId, info.response);
//         res.render('index.html');
//     });
// });

app.listen(port, function(req, res) {
    console.log("Server is running on port: ", port);
});

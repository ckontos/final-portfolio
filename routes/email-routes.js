const nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: 'ckontoswebpage@gmail.com',
    auth: {
        user: 'ckontoswebpage@gmail.com',
        pass: 'Cdkjob3!'
    }
});

module.exports = function(app, flag) {

    app.get('/', function(req, res) {
        res.sendfile('index.html');
    });
    app.get('/send', function(req, res) {
        var mailOptions = {
            to: req.query.to,
            subject: req.query.subject,
            html: req.query.html
        };
        console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, function(error, response) {
            if (error) {
                console.log(error);
                res.end("error");
            }
            else {
                console.log("Message sent: " + response.message);
                res.end("sent");
            }
        });
    });
};

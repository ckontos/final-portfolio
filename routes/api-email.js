// Require the models

var db = require("../models");


//Routes ==========================================

module.exports = function(app) {

    //GET route for all of the contacts/messages
    app.get("/api/messages", function(req, res) {
        var query = {};
        db.Message.findAll({
            where: query,
        }).then(function(dbMessage) {
            res.json(dbMessage);
        });
    });

    //post to same route for a new submitted message

    app.post("/api/messages", function(req, res) {
        db.Message.create({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                message: req.body.message
            }).then(function(dbMessage) {
                res.json(dbMessage.insertId);
            })
            .catch(function(err) {
                res.json(err);
            });
    });

};

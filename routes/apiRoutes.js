
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.redirect("/techs");
    })

    // GET route for getting all of the todos
    app.get("/api/techs", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Artist.findAll({}).then(function (dbTechs) {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbTechs);
        });
    });

    // POST route for saving a new todo
    app.post("/api/techs", function (req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.Tech.create({
            techName: req.body.bandName,
            location: req.body.bandLocation,
            contactName: req.body.contactName,
            contactNumber: req.body.contactNumber,
            email: req.body.email
        }).then(function (dbTechs) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbTechs);
        });
    });
"use strict";

var express = require('express');

var path = require('path');

var app = express();
var port = 7000;

var hbs = require('hbs');

var static_path = path.join(__dirname, "../public");
var template_path = path.join(__dirname, "../templates/views");
var partials_path = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);
app.use(express["static"](static_path));
app.get("", function (req, res) {
  res.render('index');
});
app.get("/login", function (req, res) {
  res.render('login');
});
app.get("/register", function (req, res) {
  res.render('register');
});
app.post("/notes", function (req, res) {
  res.render('notes');
});
app.get("/notes", function (req, res) {
  res.render('notes');
});
app.get("/game", function (req, res) {
  res.render('game');
});
app.get("/contact", function (req, res) {
  res.render('contact');
});
app.get("/error", function (req, res) {
  res.send('error');
});
app.listen(port, function () {
  console.log("Server is listening at ".concat(port));
});
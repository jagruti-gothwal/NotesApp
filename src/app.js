const express = require('express');
const path = require('path');
const app = express();
const port = 7000;
const hbs = require('hbs');

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs')
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("", (req, res) => {
    res.render('index')
})

app.get("/login", (req, res) => {
    res.render('login')
})

app.get("/register", (req, res) => {
    res.render('register')
})

app.post("/notes", (req, res) => {
    res.render('notes')
})

app.get("/notes", (req, res) => {
    res.render('notes')
})

app.get("/game", (req, res) => {
    res.render('game')
})

app.get("/contact", (req, res) => {
    res.render('contact')
})

app.get("/error", (req, res) => {
    res.send('error')
})


app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})
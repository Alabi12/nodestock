const express = require('express')
const app = express()
const path = require('path');
const exphbs  = require('express-handlebars');

const PORT = process.env.PORT || 5000;

// Set Hanlebars Middleware

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Set Handlebar routes

app.get('/', function (req, res) {
    res.render('home', {
        stuff: "The main content of the page"
    });
});

// Set static folder

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log('server listening on PORT ' +  PORT)
})
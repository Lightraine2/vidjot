const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

// Connect to db

mongoose.connect('');

// How middleware works - basically this is done every time a req is handled. You can assign variables here to add to request handling. You can assign authentication info here too. 

// app.use(function (req, res, next) {
//     console.log(Date.now());
//     req.name = 'Laurence Dale';
//     next();
// });

// Handlebars Middleware

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Index route

app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render('index', {
        title: title
    });

});

// About route

app.get('/about', (req, res) => {
    res.render('about');
});

const port = 5000;


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


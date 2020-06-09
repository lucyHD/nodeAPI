const express = require('express');
const app = express(); //top-level function -> creates an Express application 
const hbs = require('express-handlebars');
const path = require('path'); 
const getCats = require('./lib/getData')


app.use(express.static(path.join(__dirname, 'public')))
// this means that you are going to be serving static files (like the css) from the public folder 

app.set('view engine', 'hbs'); // all this means is that you are setting hbs as your view/template engine

app.engine('hbs', hbs({
    extname: 'hbs',
}))
//here you are telling Express where/how to find these files 

app.get('/', async (req, res) =>{
    let data = await getCats();

    res.render('index', {data});
});

app.listen(3000, ()=> {
    console.log("listening to port 3000"); 
});






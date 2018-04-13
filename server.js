const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index', {data:''});
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

app.post('/encrypted', (req, res) => {
    var data = req.body;
    console.log(data);
    res.render('encryption', {data:data});
});

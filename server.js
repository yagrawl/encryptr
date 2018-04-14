const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;
const algorithm = 'aes-256-ctr';


app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index', {data:''});
});

app.get('/decryptr', (req, res) => {
    res.render('decrypt', {data: ''});
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

app.post('/encrypted', (req, res) => {
    var data = req.body;
    var encrypted = encrypt(data.toencrypt, data.key);
    res.render('encryption', {data:data, encrypted: encrypted});
});

app.post('/decrypted', (req, res) => {
    var data = req.body;
    var decrypted = decrypt(data.todecrypt, data.key);
    res.render('decryption', {data:data, decrypted: decrypted});
});

function encrypt(text, key){
    var cipher = crypto.createCipher(algorithm, key)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text, key){
    var decipher = crypto.createDecipher(algorithm, key)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}

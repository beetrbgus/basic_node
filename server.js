const express = require('express');
const app = express()
const port = 3000;

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/dog', function(req, res) {
    let sound = {
        'sound' : '멍멍'
    }
    res.send(sound);
});

app.get('/cat', function(req, res) {
    let sound = {
        'sound' : '야옹'
    }
    res.send(sound);
});

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
}); 
const express = require('express');
const app = express()
const port = 3000;

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/:animal', function(req, res) {
    const animal = req.params.animal;
    let sound = {
        'animal' : animal
    }
    res.json(sound);
});

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
}); 
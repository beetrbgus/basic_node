const express = require('express');
const app = express()
const port = 3000;

app.get('/', function(req, res) {
    res.send('Hello world');
});

// GET 요청을 받는 방법
app.get('/:animal', function(req, res) {
    // routing 경로로 받은 값
    const animal = req.params.animal;
    // query param으로 받은 값. json 형식으로 나온다.
    const query = req.query;

    console.log(query);
    let sound = {
        'animal' : animal
    }
    res.json(sound);
});

// POST 요청을 받는 방법
app.post('/:animal', (req, res) => {
    const body = req.body;
    console.log(body);
})
app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
}); 
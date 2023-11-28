const express = require('express');
const app = express()
const port = 3000;

app.get('/', function(req, res) {
    res.send('Hello world');
});

// GET 요청을 받는 방법
app.get('/sound/:name', function(req, res) {
    console.log(req.params);
    const {name} = req.params;
    
    let sound = {'sound' : '멍멍', 'cat' : '야옹'};
    
    if(name === 'dog') {
        res.json({'sound' : '멍멍'});
    } else if( name === 'cat') {
        res.json({'sound' : '야옹'});
    } else {
        res.json({'sound' : '이 동물은 무엇인가'});
    }
});

// POST 요청을 받는 방법
app.post('/sound/:animal', (req, res) => {
    const body = req.body;
    console.log(body);
})
app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
}); 
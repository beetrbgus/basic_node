const http = require('http');

const hostname = 'localhost';
const port = 3000;

var server = http.createServer(function(request,response){ 

    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello node.js!!');

});

// 3. listen 함수로 8080 포트를 가진 서버를 실행한다. 서버가 실행된 것을 콘솔창에서 확인하기 위해 'Server is running...' 로그를 출력한다
server.listen(port, function(){ 
    console.log('Server is running...');
});
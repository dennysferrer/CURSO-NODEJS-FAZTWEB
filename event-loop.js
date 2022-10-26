/* console.log('first');

setTimeout(() => {
    console.log('second');
}, 3000);

console.log('third'); */

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Welcome to the server');
        return res.end();
    }
    if (req.url === '/about'){

        for (i=0; i<= 100000; i++){
            console.log(Math.random()*i);
        }
        res.write('About');
        return res.end();
    }

    res.end('Not found page');

});

server.listen(3000);

console.log(`Server on port: 3000`);


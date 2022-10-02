const fs = require('fs');

const data1 = fs.readFileSync('./data/first.txt','utf-8');
const data2 = fs.readFileSync('./data/second.txt', 'utf-8');

console.log(data1, data2);

fs.writeFileSync('./data/third.txt', 'Hello world 3');

const texto = 'Texto para archivo cuatro ...';

fs.writeFileSync('./data/four.txt', texto, {
    flag: 'a'
});
const { promisify } = require('util');
const { readFile } = require('fs')

const readFilePromise = promisify(readFile);

const readText = async() => {
    try{
        const resultado = await readFilePromise('./data/first.txt', 'utf-8');
        console.log(resultado);
    } catch(error){
        console.log(error);
    } 
}

readText();
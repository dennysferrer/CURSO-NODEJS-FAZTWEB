const {readFile} = require('fs');
const {promisify} = require('util');


const getText = (pathFile) => {
    return new Promise((resolve, reject) => {
        readFile(pathFile, 'utf-8', (error, data) => {
            if (error){
                reject (error);
            } else {
                resolve (data);
            }
        });
    })
}

const readText = async () => {
    const resultado = await getText('./data/first.txt');
    console.log(resultado);
}

readText();


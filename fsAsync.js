const fs = require('fs');

const dato = fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log('Se genero un error ...')
    } else {
        console.log('Se le leyo el archivo correctamente: ', data);
    }
});


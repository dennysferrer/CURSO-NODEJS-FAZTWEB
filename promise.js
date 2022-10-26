const {readFile, read} = require('fs');
const { get } = require('http');
 
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

getText('./data/four.txt')
    .then((result) => console.log(result))
    .catch((error) => console.log(error))






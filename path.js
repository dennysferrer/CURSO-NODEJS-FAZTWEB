const { dirname } = require('path');
const path = require('path');

const filepath = path.join('C:','user','OneDrive','My_Couses','nodejs');

console.log(filepath);
console.log(path.basename(filepath));
console.log(dirname(filepath));
console.log(path.resolve('dist'))
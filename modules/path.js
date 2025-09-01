const path = require('path');

// nome do arquivo
console.log(path.basename(__filename));

// nome do diretorio
console.log(path.dirname(__filename));

// extensao do arquivo
console.log(path.extname(__filename));

// criar objeto path
console.log(path.parse(__filename));
const fs = require('fs');
const path = require('path');

// criar parsePath
// fs.mkdir(path.join(__dirname, '/teste'), (err) => {
//     if(err) {
//         console.log('Erro ao criar a pasta', err);
//     } else {
//         console.log('Pasta criada com sucesso!');
//     }
// });

// criar arquivo:
// fs.writeFile(path.join(__dirname, '/teste', 'teste.html'), 'Hello World!', (err) => {
//     if(err) {
//         console.log('Erro ao criar o arquivo', err);
//     } else {
//         console.log('Arquivo criado com sucesso!');
//     }
//     }
// );

// adicioanr ao arquivo:
fs.appendFile(path.join(__dirname, '/teste', 'teste.html'), '\n<h1>Olá Mundo!</h1>', (err) => {
    if(err) {
        console.log('Erro ao adicionar ao arquivo', err);
    } else {
        console.log('Adicionado ao arquivo com sucesso!');
    }
    }
);
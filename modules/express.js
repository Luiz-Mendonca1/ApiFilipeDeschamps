// Importa o módulo Express, que facilita a criação de servidores web
const express = require('express');
// Inicializa uma aplicação Express
const app = express();

// Define uma rota GET para o caminho '/home'
app.get('/home', (req, res) => {
    // Define o tipo de conteúdo da resposta como HTML
    res.contentType('text/html');
    // Define o status HTTP como 200 (OK) e envia uma mensagem HTML
    res.status(200).send('<h1>Hello, world!</h1>');
});

app.get('/users', (req, res) => {
    const users = [
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 25 },
            { name: 'Charlie', age: 35 },
        ]
    res.status(200).json(users);
    });

// Define a porta em que o servidor irá escutar
const server = 3000;

// Inicia o servidor Express na porta definida
app.listen(server, () => {
    // Exibe uma mensagem no console indicando que o servidor está rodando
    console.log(`Server is running at http://localhost:${server}/home`);
});
// Importa o módulo Express, que facilita a criação de servidores web
const express = require('express');

// CORREÇÃO: caminho correto para o model
const UserModel = require('../src/models/user.model');

// Inicializa uma aplicação Express
const app = express();

// MIDDLEWARE para parsear JSON
app.use(express.json());

// Define uma rota GET para o caminho '/home'
app.get('/home', (req, res) => {
    // Define o tipo de conteúdo da resposta como HTML
    res.contentType('text/html');
    // Define o status HTTP como 200 (OK) e envia uma mensagem HTML
    res.status(200).send('<h1>Hello, world!</h1>');
});

// Rota para listar usuários (GET)
app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para criar usuário (POST) - CORREÇÃO: mudei para POST
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Define a porta em que o servidor irá escutar
const server = 3000;

// Inicia o servidor Express na porta definida
app.listen(server, () => {
    // Exibe uma mensagem no console indicando que o servidor está rodando
    console.log(`Server is running at http://localhost:${server}/home`);
});
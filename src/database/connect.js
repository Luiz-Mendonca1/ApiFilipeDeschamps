const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsfeliperocha.gt0vvqg.mongodb.net/database?retryWrites=true&w=majority&appName=CursoNodeJSFelipeRocha`);
        console.log('Conectado ao banco de dados com sucesso!');
    } catch (error) {
        console.log('Erro ao conectar com o banco de dados:', error);
    }
};

module.exports = connectToDatabase;
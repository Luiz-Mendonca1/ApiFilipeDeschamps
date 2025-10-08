const mongose = require('mongoose');

const connectToDatabase = async () => {
    await mongose.connect('mongodb+srv://admin:<db_password>@cursonodejsfeliperocha.gt0vvqg.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJSFelipeRocha',
        (error)=>{
            if(error){
                console.log('Erro ao conectar com o banco de dados:', error);
            } else {
                console.log('Conectado ao banco de dados com sucesso!');
            }
        });
}
module.exports = connectToDatabase;
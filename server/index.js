const cors          = require('cors');
const express       = require('express');
const cookieParser  = require('cookie-parser');
const database      = require('./database/bd');
const router        = require('./router/index');

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'})); // для взаимодействия браузера и сервера
app.use('', router);

const start = async() =>{
    try{
        //подключение бд
        database.authenticate()
        .then(()=>console.log('Database connected...'))
        .catch(err=> console.log('Error:'+ err));

        app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
    }
    catch(e){
        console.log(e);
    }
}

start();
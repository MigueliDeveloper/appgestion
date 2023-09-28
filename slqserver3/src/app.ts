import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import  router  from './routes/CursoRoutes';
import sequelize from './config/connectdb';

const PORT = process.env.PORT || 3000;
// Conexiones externas del servidor
const app = express();

//Conexiones internas del servidor
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`API conectada por el puerto ${PORT}`));

try {
    sequelize.authenticate();
    console.log('La conexión se ha establecido correctamente.');
} catch (error) {
    console.error('No se puede conectar a la base de datos:', error);
}
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
//
import routercursos from './routes/CursoRoutes';
import routermensajes from './routes/MensajeRoutes';
import routertareas from './routes/TareaRoutes';
import routerusuarios from './routes/UsuarioRoutes';
//
import sequelize from './config/connectdb'

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routercursos, routermensajes, routertareas, routerusuarios);
// app.use(routermensajes);
// app.use(routertareas);
// app.use(routerusuarios);

app.listen(PORT, () => console.log(`Api conectada por el puerto ${PORT}`));

try {
    sequelize.authenticate();
    console.log('La conexión con la Base de Datos es correcta');
} catch (error){
    console.error('No se puede conectar con la base de datos', error);
}
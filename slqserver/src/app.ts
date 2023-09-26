import 'dotenv/config';
import express from 'express';
import cors from 'cors';
// import { router } from './routes';

const PORT = process.env.PORT || 3000;
// Conexiones externas del servidor
const app = express();

//Conexiones internas del servidor
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`API conectada por el puerto ${PORT}`));
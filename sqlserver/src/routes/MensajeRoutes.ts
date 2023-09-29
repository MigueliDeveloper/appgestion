import { Router } from 'express';
import { deleteMensaje, getMensaje, getMensajes, postMensaje, updateMensaje} from '../controllers/MensajeController';

const routermensajes = Router();

routermensajes.get('/mensajes/', getMensajes);
routermensajes.get('/mensajes/:id', getMensaje);
routermensajes.delete('/mensajes/:id', deleteMensaje);
routermensajes.post('/mensajes/', postMensaje);
routermensajes.put('/mensajes/:id', updateMensaje);

export default routermensajes;
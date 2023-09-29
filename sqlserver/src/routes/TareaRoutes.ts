import { Router } from 'express';
import { deleteTarea, getTarea, getTareas, postTarea, updateTarea} from '../controllers/TareaController';

const routertareas = Router();

routertareas.get('/tareas/', getTareas);
routertareas.get('/tareas/:id', getTarea);
routertareas.delete('/tareas/:id', deleteTarea);
routertareas.post('/tareas/', postTarea);
routertareas.put('/tareas/:id', updateTarea);

export default routertareas;


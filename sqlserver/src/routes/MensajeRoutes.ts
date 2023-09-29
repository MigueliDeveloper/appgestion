import { Router } from 'express';
import { deleteMensaje, getMensaje, getMensajes, postMensaje, updateMensaje} from '../controllers/MensajeController';

const router = Router();

router.get('/', getMensajes);
router.get('/:id', getMensaje);
router.delete('/:id', deleteMensaje);
router.post('/', postMensaje);
router.put('/:id', updateMensaje);

export default router;
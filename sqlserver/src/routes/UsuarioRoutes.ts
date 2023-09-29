import { Router } from 'express';
import {deleteUsuario, getUsuario, getUsuarios, postUsuario, updateUsuario} from '../controllers/UsuarioController';


const routerusuarios = Router();

routerusuarios.get('/usuarios/', getUsuarios);
routerusuarios.get('/usuarios/:id', getUsuario);
routerusuarios.delete('/usuarios/:id', deleteUsuario);
routerusuarios.post('/usuarios/', postUsuario);
routerusuarios.put('/usuarios/:id', updateUsuario);


export default routerusuarios;
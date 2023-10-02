import { Router } from 'express'
import { deleteAdminService, getAdminServices, getAdminService, postAdminService, updateAdminService } from '../controllers/AdminServiceController'


const routeradminservice = Router();
routeradminservice.get('/cursos/', getAdminServices);
routeradminservice.get('/cursos/:id', getAdminService);
routeradminservice.delete('/cursos/:id', deleteAdminService);
routeradminservice.post('/cursos/', postAdminService);
routeradminservice.put('/cursos/:id', updateAdminService);

export default routeradminservice;

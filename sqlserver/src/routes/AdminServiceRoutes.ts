import { Router } from 'express'
import { deleteAdminService, getAdminServices, getAdminService, postAdminService, updateAdminService } from '../controllers/AdminServiceController'


const routeradminservice = Router();
routeradminservice.get('/adminservices/', getAdminServices);
routeradminservice.get('/adminservices/:id', getAdminService);
routeradminservice.delete('/adminservices/:id', deleteAdminService);
routeradminservice.post('/adminservices/', postAdminService);
routeradminservice.put('/adminservices/:id', updateAdminService);

export default routeradminservice;

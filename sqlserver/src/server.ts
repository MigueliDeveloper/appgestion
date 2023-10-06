import express, { Application } from 'express';
import cors from 'cors';
import routescursos from './routes/CursoRoutes';
import routesmensajes from './routes/MensajeRoutes';
import routestareas from './routes/TareaRoutes';
import routesusuarios from './routes/UsuarioRoutes';
import routesadminservices from './routes/AdminServiceRoutes';

import Mensaje from './models/MensajeModel';
import Tarea from './models/TareaModel';
import Usuario from './models/UsuarioModel';
import Curso from './models/CursoModel';
import AdminService from './models/AdminServiceModel';

class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
       
        this.app.use('/api/cursos', routescursos);
        this.app.use('/api/mensanjes', routesmensajes);
        this.app.use('/api/tareas',routestareas)
        this.app.use('/api/usuarios', routesusuarios);
        this.app.use('/api/adminservices', routesadminservices);
    }

    middlewares() {
        // Parseo body
        this.app.use(express.json());
        // Cors
        this.app.use(cors());
    }

    async dbConnect(){
        try{    
            await Curso.sync()
            await Mensaje.sync()
            await Tarea.sync()
            await Usuario.sync()
            await AdminService.sync()

        } catch(error){
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;











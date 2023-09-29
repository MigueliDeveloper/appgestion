import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const Tarea = db.define('Tarea', {
    nombre: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING, 
    },
    puntuacion: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.STRING,
    },
    importancia: {
        type: DataTypes.STRING,
    },
    
}, {

    createdAt: false,
    updatedAt: false,

});

export default Tarea
import { DataTypes } from 'sequelize':
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
    importacia: {
        type: DataTypes.STRING,
    },
    id_curso: {
        type: DataTypes.STRING,
    },
    id_user_alu: {
        type: DataTypes.STRING,
    },
    est_entrega: {
        type: DataTypes.STRING,
    },
    fec_entrega: {
        type: DataTypes.STRING,
    },
}, {

    createdAt: false,
    updatedAt: false,

});

export default Tarea
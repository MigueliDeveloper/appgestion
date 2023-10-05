import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Usuario = sequelize.define('Usuario',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellidos: {
        type: DataTypes.STRING, 
    },
    Fnacimiento: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    telefono: {
        type: DataTypes.STRING,
    },
    foto: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    tipo: {
        type: DataTypes.STRING,
    },
    fecha_registro: {
        type: DataTypes.STRING,
    },
    Anotaciones: {
        type: DataTypes.STRING,
    }
}, {

    createdAt: false,
    updatedAt: false,

});

export default Usuario 


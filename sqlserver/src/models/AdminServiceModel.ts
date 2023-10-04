import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const AdminService = db.define('adminservice',{
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
   
}, {
    createdAt: false,
    updatedAt: false
});
export default AdminService;
import { Sequelize } from "sequelize";


const sequelize = new Sequelize('apppruebas', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;
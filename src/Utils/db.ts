import path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
import { Sequelize } from "sequelize";
import mysql from 'mysql2';
export const db = new Sequelize({
    dialectModule:mysql,
    dialect:"mysql",
    host:process.env.HOST,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DATABASE,
});
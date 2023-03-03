import { DataTypes } from "sequelize";
import { db } from "../Utils/db";

export const Church_attendance = db.define('church_attendance',{
    Date:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    Name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Status:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    Service:{
        type:DataTypes.ENUM,
        values:['FIRST SERVICE','SECOND SERVICE'],
        defaultValue:'FIRST SERVICE',
    }
})
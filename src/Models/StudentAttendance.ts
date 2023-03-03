import { DataTypes } from "sequelize";
import { db } from "../Utils/db";

export const StudentAttendance = db.define('students_attendance',{
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
    }
})
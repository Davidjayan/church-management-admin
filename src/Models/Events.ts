import { DataTypes } from "sequelize";
import { db } from "../Utils/db";

export const Events = db.define('Events',{
    Event:{
        type:DataTypes.STRING,
        allowNull:false
    },
    day:{
        type:DataTypes.STRING,
        allowNull:false
    },
    timingFrom:{
        type:DataTypes.STRING,
        allowNull:false
    },
    timingTo:{
        type:DataTypes.STRING,
        allowNull:true
    },
    weekNo:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    specialEvent:{
        type:DataTypes.BOOLEAN,
        allowNull:true
    }
})
import { DataTypes } from 'sequelize'
import { db } from '../Utils/db'

export const Verselist = db.define('Verselist', {
  Book: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Chapter: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Verse: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

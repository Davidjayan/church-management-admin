import { DataTypes } from 'sequelize'
import { db } from '../Utils/db'

export const Admin = db.define('admin', {
  Username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

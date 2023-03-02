import { DataTypes } from 'sequelize'
import { db } from '../Utils/db'

export const AccountingEntry = db.define(
  'weekly_offering_report',
  {
    Date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: 'weekly_offering_report' },
)

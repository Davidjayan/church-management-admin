import { DataTypes } from 'sequelize'
import { db } from '../Utils/db'

export const Memberform = db.define('member_details', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DOB: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  Age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Gender: {
    type: DataTypes.ENUM,
    values: ['male', 'female'],
    defaultValue: 'male',
  },
  Married: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  WeddingDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  EmailID: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Mobile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  FamilyHead: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Baptized: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  Android: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  FamilyID: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SelfID: {
    type: DataTypes.STRING(20),
    allowNull: false,
    
  },
})

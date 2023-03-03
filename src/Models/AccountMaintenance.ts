import { DataTypes } from 'sequelize'
import { db } from '../Utils/db'

export const AccountMaintenance = db.define('weekly_offering_overview', {
  Date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  ChurchOffering: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  TitheTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  OfferingTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  SpecialOfferingTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  BaptismofferingTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  BirthdayofferingTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  WeddingofferingTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  ChilddedicationofferingTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  CommittedofferingTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  MissionaryTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  BuildingFundTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  GrandTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  TwoThousands: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  FiveHundreds: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  TwoHundreds: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  Hundreds: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  Fifty: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  Twenty: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  Ten: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  Five: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  Two: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  One: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
},{tableName:"weekly_offering_overview"})

import { DataTypes } from 'sequelize'
import { db } from '../Utils/db'

export const SlideshowImages = db.define('Slideshow_images', {
  src: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  heading: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  caption: {
    type: DataTypes.STRING,
    allowNull: true,
  },
})

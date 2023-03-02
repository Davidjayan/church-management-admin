import { DataTypes } from 'sequelize'
import { db } from '../Utils/db'

export const YoutubeIds = db.define('youtube_ids', {
  videoId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

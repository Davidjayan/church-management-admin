import { Response } from 'express'
import { Events } from '../Models/Events'
import { returnTemplate } from '../Utils/utils'

export const EventService = {
  create: async (params: any, res: Response) => {
    const { data } = params
    try {
      const result = await Events.create(data)
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  },
  update: async (params: any, res: Response) => {
    const { data, clause } = params
    try {
      const result = await Events.update(data, { where: clause })
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  },
  deleteData: async (params: any, res: Response) => {
    const { row } = params
    try {
      const result = await Events.destroy({ where: row })
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  },
  findAll: async (params: any, res: Response) => {
    const { attributes, condition } = params
    try {
      const result = await Events.findAll({
        where: condition,
        attributes,
      })
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  },
}

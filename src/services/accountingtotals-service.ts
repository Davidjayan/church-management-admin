import { Response } from 'express'
import { AccountMaintenance } from '../Models/AccountMaintenance'
import { returnTemplate } from '../Utils/utils'

export const AccountingTotalsService = {
  create: async (params: any, res: Response) => {
    const { data } = params
    try {
      const result = await AccountMaintenance.create(data)
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  },
  update: async (params: any, res: Response) => {
    const { data, clause } = params
    try {
      const result = await AccountMaintenance.update(data, { where: clause })
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  },
  deleteData: async (params: any, res: Response) => {
    const { row } = params
    try {
      const result = await AccountMaintenance.destroy({ where: row })
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  },
  findAll: async (params: any, res: Response) => {
    const { attributes, condition } = params
    try {
      const result = await AccountMaintenance.findAll({
        where: condition,
        attributes,
      })
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  },
}

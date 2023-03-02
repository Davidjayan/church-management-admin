import { Response } from 'express'
import { AccountingEntry } from '../Models/AccountEntry'
import { returnTemplate } from '../Utils/utils'

export const AccountingEntryService = {
  create: async (params: any, res: Response) => {
    const { body } = params
    try {
      const result = await AccountingEntry.create(body)
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  },
  update: async (params: any, res: Response) => {
    const { data, clause } = params
    try {
      const result = await AccountingEntry.update(data, { where: clause })
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  },
  deleteData: async (params: any, res: Response) => {
    const { row } = params
    try {
      const result = await AccountingEntry.destroy({ where: row })
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  },
  findAll: async (params: any, res: Response) => {
    const { attributes, condition } = params
    try {
      const result = await AccountingEntry.findAll({
        where: condition,
        attributes,
      })
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  },
}

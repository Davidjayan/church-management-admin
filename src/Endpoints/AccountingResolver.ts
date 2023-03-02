import { Request, Response } from 'express'
import { AccountMaintenance } from '../Models/AccountMaintenance'
import { returnTemplate } from '../Utils/utils'

export class AccountingResolver {
  static async testA(req: Request, res: Response) {
    try {
      let result = await AccountMaintenance.findAll()
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  }
}

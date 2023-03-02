import { Request, Response } from 'express'
import { AccountingEntry } from '../Models/AccountEntry'
import { AccountingEntryService } from '../services/accountingentry-service'
import { returnTemplate } from '../Utils/utils'

export default async (req: Request, res: Response) => {
  const { data, totals, denominations } = req.body
  try {
    let result = await AccountingEntryService.create(data, res)
    return returnTemplate(1, result, res)
  } catch (error) {
    return returnTemplate(0, error, res)
  }
}

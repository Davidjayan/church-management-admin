import { Request, Response } from 'express'
import { AccountingEntry } from '../Models/AccountEntry'
import { AccountMaintenance } from '../Models/AccountMaintenance'
import { AccountingEntryService } from '../services/accountingentry-service'
import { AccountingTotalsService } from '../services/accountingtotals-service'
import { returnTemplate } from '../Utils/utils'

export class AccountingResolver {
  static async insertData(req: Request, res: Response) {
    const { data, totals, denominations } = req.body
    try {
      let entry = await AccountMaintenance.findOne({
        where: { Date: totals.Date },
      })

      if (entry) {
        let result1 = await AccountingEntry.destroy({
          where: { Date: totals.Date },
        })
        let result3 = await AccountingEntry.bulkCreate(data)
        let result2 = await AccountMaintenance.update(
          { ...totals, ...denominations },
          { where: { Date: totals.Date } },
        )
      } else {
        let result1 = await AccountingEntry.bulkCreate(data)
        let result2 = await AccountingTotalsService.create(
          { ...totals, ...denominations },
          res,
        )
      }
      console.log(entry)

      // if (result1 && result2) {
      return returnTemplate(1, 'SUCCESS', res)
      // }
    } catch (error) {
      console.log(error);
      return returnTemplate(0, error, res)
    }
  }
}

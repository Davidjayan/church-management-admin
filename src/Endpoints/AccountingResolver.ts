import { Request, Response } from 'express'
import { Op } from 'sequelize'
import { AccountingEntry } from '../Models/AccountEntry'
import { AccountMaintenance } from '../Models/AccountMaintenance'
import { AccountingEntryService } from '../services/accountingentry-service'
import { AccountingTotalsService } from '../services/accountingtotals-service'
import {
  buildHtml,
  currencyDenoScales,
  offeringTypes,
  returnTemplate,
  totalsColumnNames,
} from '../Utils/utils'

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
        let result2 = await AccountMaintenance.create({
          ...totals,
          ...denominations,
        })
      }
      return returnTemplate(1, 'SUCCESS', res)
    } catch (error) {
      console.log(error)
      return returnTemplate(0, error, res)
    }
  }

  static async fetchAccountingInformation(req: Request, res: Response) {
    const date = req.query.Date
    const data = await AccountingEntry.findAll({
      where: { Date: date },
      attributes: ['Name', 'Date', 'Type', 'Amount'],
    })
    const totals = await AccountMaintenance.findAll({
      where: { Date: date },
      attributes: [...Object.keys(currencyDenoScales)],
    })
    const denominations = await AccountMaintenance.findAll({
      where: { Date: date },
      attributes: [...totalsColumnNames],
    })
    return returnTemplate(1, { data, totals, denominations }, res)
  }
  static async getDataPdf(req: Request, res: Response) {
    const fromDate: any = req.query.fromDate
    const toDate: any = req.query.toDate

    if (toDate) {
      const data = await AccountingEntry.findAll({
        where: {
          Date: {
            [Op.between]: [new Date(fromDate), new Date(toDate)],
          },
        },
        attributes: ['Name', 'Date', 'Type', 'Amount'],
      })

      const totals = await AccountMaintenance.findAll({
        where: {
          Date: {
            [Op.between]: [new Date(fromDate), new Date(toDate)],
          },
        },
        attributes: [...Object.keys(currencyDenoScales), ...totalsColumnNames],
      })

      return res.status(200).send(buildHtml(data, totals, fromDate, toDate))
    } else {
      const data = await AccountingEntry.findAll({
        where: {
          Date: fromDate,
        },
        attributes: ['Name', 'Date', 'Type', 'Amount'],
      })
      const totals = await AccountMaintenance.findAll({
        where: {
          Date: fromDate,
        },
        attributes: [...Object.keys(currencyDenoScales), ...totalsColumnNames],
      })
     return res.status(200).send(buildHtml(data, totals, fromDate))
    }
  }
}

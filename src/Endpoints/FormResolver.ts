import { Request, Response } from 'express'
import moment from 'moment'
import { Memberform } from '../Models/MemberForm'
import { returnTemplate } from '../Utils/utils'

export class FormResolver {
  static async searchName(req: Request, res: Response) {
    try {
      let result = await Memberform.findAll({ attributes: ['Name'] })
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  }

  static async fetchData(req: Request, res: Response) {
    const query = req.query
    try {
      let result = await Memberform.findAll({
        where: query,
        attributes: [
          'Name',
          'DOB',
          'Gender',
          'Android',
          'Baptized',
          'EmailID',
          'Mobile',
          'Married',
          'WeddingDate',
          'Address',
          'SelfID',
        ],
      })
      return returnTemplate(1, result, res)
    } catch (error) {
      return returnTemplate(0, error, res)
    }
  }

  static async insert(req: Request, res: Response) {
    let data = req.body
    data.Age = moment().diff(data.DOB, 'years')
    try {
      let entry = await Memberform.findOne({
        where: { SelfID: data.SelfID },
      })

      if (entry) {
        let res = await Memberform.update(data, {
          where: { SelfID: data.SelfID },
        })
      } else {
        let result1 = await Memberform.create(data)
      }
      return returnTemplate(1, 'SUCCESS', res)
    } catch (error) {
      console.log(error)
      return returnTemplate(0, error, res)
    }
  }
}

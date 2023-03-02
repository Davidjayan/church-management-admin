import { Request, Response } from 'express'
import { Memberform } from '../Models/MemberForm'
import { returnTemplate } from '../Utils/utils'

export default async (req: Request, res: Response) => {
  try {
    let result = await Memberform.findAll({ attributes: ['Name'] })
    return returnTemplate(1, result, res)
  } catch (error) {
    return returnTemplate(0, error, res)
  }
}

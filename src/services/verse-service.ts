import { Request, Response } from 'express'
import { Church_attendance } from '../Models/Church_attendance'
import { Verselist } from '../Models/Verselist'
import { returnTemplate } from '../Utils/utils'

export const create = async (req: Request, res: Response) => {
  const { body } = req
  try {
    const result = await Verselist.create(body)
    return returnTemplate(1, result, res)
  } catch (error) {
    return returnTemplate(0, error, res)
  }
}

export const update = async (req: Request, res: Response) => {
  const { data, clause } = req.body
  try {
    const result = await Verselist.update(data, { where: clause })
    return returnTemplate(1, result, res)
  } catch (error) {
    return returnTemplate(0, error, res)
  }
}

export const deleteData = async (req: Request, res: Response) => {
  const { row } = req.body
  try {
    const result = await Verselist.destroy({ where: row })
    return returnTemplate(1, result, res)
  } catch (error) {
    return returnTemplate(0, error, res)
  }
}

export const findAll = async (req: Request, res: Response) => {
  const { attributes, condition } = req.body
  try {
    const result = await Verselist.findAll({
      where: condition,
      attributes,
    })
    return returnTemplate(1, result, res)
  } catch (error) {
    return returnTemplate(0, error, res)
  }
}

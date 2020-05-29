import { Request, Response } from 'express'
import { DestroyOptions, UpdateOptions } from 'sequelize'
import { UsersInterface } from '../interfaces/users.interfaces'
import { Users } from '../models/users.model'

export class UsersController {
  public getAllUsers = async (req: Request, res: Response) => {
    try {
      const allUsers = await Users.findAll<Users>({})
      res.json(allUsers)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  public createUser = async (req: Request, res: Response) => {
    try {
      const params: UsersInterface = req.body
      const user = await Users.create<Users>(params)
      res.status(201).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  public getUser = async (req: Request, res: Response) => {
    try {
      const userId: string = req.params.id
      const user = await Users.findByPk<Users>(userId)
      if (!user) {
        res.status(404).json({ errors: ['Node not found'] })
      }
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  public updateUser = async (req: Request, res: Response) => {
    try {
      const userId: string = req.params.id
      const params: UsersInterface = req.body

      const update: UpdateOptions = {
        where: { id: userId },
        limit: 1,
      }

      const user = await Users.update(params, update)
      res.status(200).json({ data: 'success' })
    } catch (err) {
      res.status(500).json(err)
    }
  }

  public deleteUser = async (req: Request, res: Response) => {
    try {
      const userId: string = req.params.id

      const options: DestroyOptions = {
        where: { id: userId },
        limit: 1,
      }

      const user = await Users.destroy(options)
      res.status(200).json({ data: 'success' })
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

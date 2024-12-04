import { Router } from 'express'
import { UserController } from '../controllers/users.js'

export const createUserRouter = ({ userModel }) => {
  const usersRoutes = Router()

  const userController = new UserController({ userModel })

  usersRoutes.get('/', userController.getAll)
  usersRoutes.get('/:id', userController.getById)

  return usersRoutes
}

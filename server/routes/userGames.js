import { Router } from 'express'
import {  UserGameController } from '../controllers/userGames.js'

export const createUserGameRouter = ({ userGameModel }) => {
  const userGamesRoutes = Router()

  const userGameController = new UserGameController({ userGameModel })

  userGamesRoutes.get('/:id/games', userGameController.getUserGames)

  return userGamesRoutes
}

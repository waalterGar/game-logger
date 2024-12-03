import {Router} from 'express'
import { GameController } from '../controllers/games.js'

export const createGameRouter = ({ gameModel }) => {
  const gamesRouter = Router()

  const gameController = new GameController({ gameModel })

  gamesRouter.get('/', gameController.getAll)

  return gamesRouter
}

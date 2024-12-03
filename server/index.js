import express from 'express'
import cors from 'cors'
import { createGameRouter } from './routes/games.js'
import { GameModel } from './models/games.js'

const PORT = process.env.PORT ?? 3000

const app = express()

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:5173']
  })
)
app.use(express.json())

app.disable('x-powered-by')

app.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT)
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.use('/games', createGameRouter({ gameModel: GameModel }))

// app.use('/users', createUserRouter({ userModel: UserModel }))

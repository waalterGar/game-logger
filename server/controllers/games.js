export class GameController {
  constructor({ gameModel }) {
    this.gameModel = gameModel
  }

  getAll = async (req, res) => {
    console.log('GET /games')
    const games = await this.gameModel.getAll()
    res.json(games)
  }
}

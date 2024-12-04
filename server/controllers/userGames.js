export class UserGameController {
  constructor({ userGameModel }) {
    this.userGameModel = userGameModel
  }

  getUserGames = async (req, res) => {
    const id = req.params.id
    console.log('GET /userGames/', id)
    const userGames = await this.userGameModel.getUserGames(id)
    res.json(userGames)
  }
}

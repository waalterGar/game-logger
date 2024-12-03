export class UserController {
  constructor({ userModel }) {
    this.userModel = userModel
  }

  getAll = async (req, res) => {
    console.log('GET /users')
    const users = await this.userModel.getAll()
    res.json(users)
  }

  getById = async (req, res) => {
    const id = req.params.id
    console.log('GET /users/', id)
    const user = await this.userModel.getById(id)
    res.json(user)
  }
}

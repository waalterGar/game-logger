import mysql from 'mysql2/promise'

const dbPassword = process.env.DB_PASSWORD

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: dbPassword,
  database: 'gamesdb'
}

const connection = await mysql.createConnection(config)

export class UserGameModel {
  static async getUserGames(id) {
    console.log('userGame get id:', id)
    const [rows] = await connection.execute(
      'SELECT game.title,  users_games.hours_played FROM game JOIN users_games ON game.id = users_games.game_id JOIN user ON user.id = users_games.user_id WHERE user.id = ?;',
      [id]
    )

    console.log('userGame rows:', rows)
    return rows
  }
}

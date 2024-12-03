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

export class GameModel {
  static async getAll() {
    const [rows] = await connection.execute(
      'SELECT id, title, description, price, cover, rating, release_date FROM game'
    )
    return rows
  }
}

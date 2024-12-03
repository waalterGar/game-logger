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

export class UserModel {
  static async getAll() {
    const [rows] = await connection.execute('SELECT username FROM user')
    return rows
  }

  static async getById(id) {
    const [rows] = await connection.execute('SELECT username FROM user WHERE id = ?', [id])
    return rows[0]
  }
}

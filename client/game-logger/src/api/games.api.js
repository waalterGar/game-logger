import axios from 'axios'

export const getGamesRequest = async () =>
  await axios.get('http://localhost:3000/games')

import { useContext, useState } from 'react'
import { getGamesRequest } from '../api/games.api.js' 
import { GameContext } from './GameContext.jsx'

export const useGames = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGames must be used within a GameContextProvider')
  }
  return context
}

export const GameContextProvider = ({ children }) => {
  const [games, setGames] = useState([])

  async function fetchGames() {
    const games = await getGamesRequest()
    setGames(games.data)
  }

  return (
    <GameContext.Provider
      value={{
        games,
        fetchGames
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

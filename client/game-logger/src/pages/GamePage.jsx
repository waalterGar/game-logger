import { useEffect } from 'react'
import GameCard from '../components/GameCard.jsx'
import { useGames } from '../context/GameProvider.jsx'

function GamePage() {
  const { games, fetchGames } = useGames()

  useEffect(() => {
    fetchGames()
  }, [])

  function renderMain() {
    if (games.length === 0) {
      return <h1>There are no games yet</h1>
    }else{
    return games.map((game) => <GameCard game={game} key={game.id} />)
    }
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Games</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  )
}

export default GamePage

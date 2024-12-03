import React from 'react'
import { useGames } from '../context/GameProvider.jsx'
import { useNavigate } from 'react-router-dom'

function GameCard({ game }) {
  const { games } = useGames()
  const navigate = useNavigate()

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <div>
        <header className=" ">
          <h2 className="text-sm font-bold">{game.title}</h2>
        </header>
        <img src={game.cover} alt={game.title} />
        <span>{game.release_date}</span>
        <span>{game.rating}</span>
        <span>{game.price}</span>
        <div className="flex gap-x-1"></div>
      </div>
    </div>
  )   
}

export default GameCard

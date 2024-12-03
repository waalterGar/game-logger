import { Route, Routes } from 'react-router-dom'
import GamePage from './pages/GamePage.jsx'
import { GameContextProvider } from './context/GameProvider.jsx'

function App() {
  return (
    <div className="bg-zinc-600 h-screen">
      <div className="container mx-auto py-4 px-20">
        <GameContextProvider>
          <Routes>
            <Route path="/" element={<GamePage />} />
          </Routes>
        </GameContextProvider>
      </div>
    </div>
  )
}

export default App

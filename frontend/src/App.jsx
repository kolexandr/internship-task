import { useEffect, useState } from "react";
import { fetchGames } from "./api";
import GameCard from "./GameCard";

function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGames(search).then(setGames);
  }, [search]);

  return (
    <div>

      <div className="start">

      <img src="/images/eneba-logo.png" alt="eneba" style={{width: 170, height:50}} />

      <input
        placeholder="Search games..." 
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          padding: '12px 20px',
          fontSize: '16px',
          border: '2px solid #ddd',
          borderRadius: '8px',
          width: '300px',
          outline: 'none',
          transition: 'border-color 0.3s'
        }}
      />

      </div>

      <p style={{color: 'white', padding: '0 200px' }}>
        Results found: {games.length}
      </p>

      <div className="grid">
        {games.map(game =>(
          <GameCard key={game.id} game={game}/>
        ))}
      </div>
    </div>
  )
}

export default App

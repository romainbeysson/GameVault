interface Game {
  id: number
  title: string
  description: string | null
  genre: string | null
  platform: string | null
  releaseYear: number | null
}

interface HomeProps {
  games: Game[]
}

export default function Home({ games = [] }: HomeProps) {
  return (
    <>
      <div className="hero">
        <h1>🎮 GameVault</h1>
        <p>Bienvenue sur GameVault, votre bibliothèque de jeux vidéo !</p>
      </div>

      <div className="games-list">
        <h2>Liste des jeux</h2>
        {games.length === 0 ? (
          <p>Aucun jeu pour le moment.</p>
        ) : (
          <div className="cards">
            {games.map((game) => (
              <div key={game.id} className="game-card">
                <h3>{game.title}</h3>
                {game.description && <p>{game.description}</p>}
                <div className="game-info">
                  {game.genre && <span className="tag">{game.genre}</span>}
                  {game.platform && <span className="tag">{game.platform}</span>}
                  {game.releaseYear && <span className="tag">{game.releaseYear}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

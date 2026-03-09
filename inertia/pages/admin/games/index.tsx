interface Game {
  id: number
  title: string
  description: string | null
  genre: string | null
  platform: string | null
  releaseYear: number | null
}

interface AdminGamesProps {
  games: Game[]
}

export default function AdminGames({ games = [] }: AdminGamesProps) {
  return (
    <div className="admin-container">
      <div className="header">
        <h1>🎮 Gestion des jeux</h1>
        <a href="/admin/games/create" className="button">+ Ajouter un jeu</a>
      </div>

      <div>
        <a href="/">← Retour à l'accueil</a>
      </div>

      {games.length === 0 ? (
        <p>Aucun jeu pour le moment.</p>
      ) : (
        <table className="games-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titre</th>
              <th>Genre</th>
              <th>Plateforme</th>
              <th>Année</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id}>
                <td>{game.id}</td>
                <td>{game.title}</td>
                <td>{game.genre || '-'}</td>
                <td>{game.platform || '-'}</td>
                <td>{game.releaseYear || '-'}</td>
                <td>
                  <form action={`/admin/games/${game.id}`} method="POST" style={{ display: 'inline' }}>
                    <input type="hidden" name="_method" value="DELETE" />
                    <button type="submit" className="button-danger" onClick={(e) => {
                      if (!confirm('Supprimer ce jeu ?')) e.preventDefault()
                    }}>
                      Supprimer
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

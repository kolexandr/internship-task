export default function GameCard({ game }) {
  return (
    <div className="card">
      <img src={game.image_url} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.platform} • {game.region}</p>
      <p>
        <strong>€{game.price}</strong>{" "}
        <span className="old">€{game.old_price}</span>
      </p>
      <p>Cashback: €{game.cashback}</p>
      <p>❤️ {game.likes}</p>
    </div>
  );
}

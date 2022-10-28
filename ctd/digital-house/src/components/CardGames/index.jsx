export function CardGames(card) {
  return (
    <li card={card.card.id}>
      <h2>{card.card.name}</h2>
      <h3>{card.card.categories}</h3>
      <h3>{card.card.oldPrice}</h3>
      <h4>{card.card.newPrice}</h4>
      <img src={card.card.picture} />
    </li>
  );
}

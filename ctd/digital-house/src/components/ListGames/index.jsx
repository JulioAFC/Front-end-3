export function ListGames(list) {
  return (
    <li list={list.list.id}>
      <h2>{list.list.name}</h2>
      <p>{list.list.plataforms}</p>
      <h3>{list.list.categories}</h3>
      <h4>{list.list.price}</h4>
      <img src={list.list.picture} />
      
    </li>
  );
}

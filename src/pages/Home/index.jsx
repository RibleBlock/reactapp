import './Home.style.css';

export function Home() {
  return (
      <form action="POST">
        <h1>Lista de presença</h1>
        <input type="text" placeholder="Digite o nome..." />
        <button type="button">Adicionar</button>
      </form>
  );
}

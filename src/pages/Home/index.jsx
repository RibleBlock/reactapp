import './Home.style.css';

import { Card } from '../../components';

export function Home() {
  return (
      <form action="POST">
        <h1>Lista de presença</h1>
        <input type="text" placeholder="Digite o nome..." />
        <button type="button">Adicionar</button>

        <Card user="Victor Hugo" time="07:23:12" />
        <Card user="Pietro Ricardo" time="09:13:52" />
        <Card user="Pietro Ricardo" time="10:43:12" />
        <Card user="Geroge Henrique" time="14:53:32" />
      </form>
  );
}

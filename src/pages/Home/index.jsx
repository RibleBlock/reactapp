import React, { useState } from 'react';
import './Home.style.css';

import { Card } from '../../components';

export function Home() {
  const [studentName, setStudentName] = useState('Digite alguma coisa abaixo'); // <--  [armazena, atualiza esse estado]
  // const [clientName, setClientName] = useState(); // <--  [armazena, atualiza esse estado]

  return (
      <form action="POST">
        <h1>{studentName}</h1>
        <input
          type="text"
          placeholder="Digite o nome..."
          onChange={e => setStudentName(e.target.value)}
        />
        <button type="button">Adicionar</button>

        <Card user="Victor Hugo" time="07:23:12" />
        <Card user="Pietro Ricardo" time="09:13:52" />
        <Card user="Pietro Ricardo" time="10:43:12" />
        <Card user="Geroge Henrique" time="14:53:32" />
      </form>
  );
}

import React, { useState } from 'react';
import './Home.style.css';

import { Card } from '../../components';

export function Home() {
  const [studentName, setStudentName] = useState(); // <--  [armazena, atualiza esse estado]
  const [students, setStudents] = useState([]); // <-- vai armazenar os estudantes
  // const [clientName, setClientName] = useState(); // <--  [armazena, atualiza esse estado]

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }

  return (
      <form action="POST">
        <h1>Lista de Presença</h1>
        <input
          type="text"
          placeholder="Digite o nome..."
          onChange={e => setStudentName(e.target.value)}
        />
        <button type="button" onClick={handleAddStudent}>
          Adicionar
        </button>

        {
          students.map(v => <Card user={v.name} time={v.time} />)
        }
      </form>
  );
}

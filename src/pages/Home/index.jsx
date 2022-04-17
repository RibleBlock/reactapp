import React, { useState, useEffect } from 'react'; // <-- Hooks
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

  useEffect(() => {
    // corpo do useEffect
    console.log('useEffect foi chamado!');
  },[students]);

  return (
      <div className='container'>
        <header>
          <h1>Lista de Presença</h1>
          <div>
            <strong>Rodrigo</strong>
            <img src="http://github.com/rodrigorgtic.png" alt="foto" />
          </div>
        </header>

        <input
          type="text"
          placeholder="Digite o nome..."
          onChange={e => setStudentName(e.target.value)}
        />
        <button type="button" onClick={handleAddStudent}>
          Adicionar
        </button>

        {/* Cards */}
        {
          students.map(v => (
            <Card
              key={v.time}
              user={v.name}
              time={v.time}
            />
          ))
        }
      </div>
  );
}

import axios from 'axios';
import React, { useState, useEffect } from 'react'; // <-- Hooks
import './Home.style.css';

// components
import { Card } from '../../components';

export function Home() {
  const [studentName, setStudentName] = useState(); // <--  [armazena, atualiza esse estado]
  const [students, setStudents] = useState([]); // <-- vai armazenar os estudantes (É UM ARRAY DE OBJETOS)
  const [user, setUser] = useState({ name: '', avatar: '' });
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
    axios.get('https://api.github.com/users/Xar0p')
      .then(response => setUser({
          name: response.data.name || response.data.login,
          avatar: response.data.avatar_url
      }))
      .catch(e => console.log(e));
  }, []);  // <-- dependencias

  return (
      <div className='container'>
        <header>
          <h1>Lista de Presença</h1>
          <div>
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="foto" />
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
          students.map(student => (
            <Card
              key={student.time}
              user={student.name}
              time={student.time}
            />
          ))
        }
      </div>
  );
}

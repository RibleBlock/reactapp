import './Card.style.css';

export function Card({ user, time }) { // <-- tambem pode usar desestruturacao para chamar apenas o nome 'user'
  return (                             //     se for desestruracao"{user}" ou senao "{props.user}"
    <div className='card'>
      <strong>{user}</strong>
      <small>{time}</small>
    </div>
  );
}
import React from 'react';

const reviewsData = [
  { id: 1, name: "Олександр Коваленко", email: "o.kovalenko@lpnu.ua", body: "Чудова робота з компонентами React. Код структурований і чистий, особливо сподобалась реалізація тем." },
  { id: 2, name: "Марія Бондаренко", email: "mariya.bond@tech.ua", body: "Проєкт виглядає професійно. Мінімалістичний дизайн не відволікає від головного — контенту." },
  { id: 3, name: "Дмитро Мельник", email: "dmitro.dev@ukr.net", body: "Вражений увагою до деталей у системній інформації та роботі з LocalStorage." }
];

function Reviews() {
  return (
    <div className="card">
      <h2>Відгуки</h2>
      {reviewsData.map(r => (
        <div key={r.id} style={{background: 'var(--bg)', padding: '16px', borderRadius: '8px', marginBottom: '12px', border: '1px solid var(--border)'}}>
          <div style={{fontWeight: '600', color: 'var(--text-h)', fontSize: '14px'}}>{r.name}</div>
          <div style={{fontSize: '12px', color: 'var(--text)', marginBottom: '8px'}}>{r.email}</div>
          <p style={{fontSize: '13px', margin: 0}}>{r.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
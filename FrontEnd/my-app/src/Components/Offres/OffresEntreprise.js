import React, { useState, useEffect } from 'react';
import '../Offres/OffresEntreprise.css';
export default function Offres() {
  const [offres, setOffres] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOffre = {
      id: offres.length + 1,
      title,
      description,
    };
    setOffres([...offres, newOffre]);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="container">
      <h1>Creer un offre</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Ajouter Offre</button>
      </form>
      <ul>
        {offres.map((offre) => (
          <li key={offre.id}>
            <h2>{offre.title}</h2>
            <p>{offre.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
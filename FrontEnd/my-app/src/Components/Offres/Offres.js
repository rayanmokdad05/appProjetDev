import React, { useState, useEffect } from 'react';

export default function Offres() {
  const [offres, setOffres] = useState([]);

  useEffect(() => {
    
    const fetchOffres = async () => {
      const data = [
        { id: 1, title: 'Offre 1', description: 'Description de l\'offre 1' },
        { id: 2, title: 'Offre 2', description: 'Description de l\'offre 2' },
        { id: 3, title: 'Offre 3', description: 'Description de l\'offre 3' },
      ];
      setOffres(data);
    };

    fetchOffres();
  }, []);

  return (
    <div>
      <h1>Liste des Offres</h1>
      <ul>
        {offres.map(offre => (
          <li key={offre.id}>
            <h2>{offre.title}</h2>
            <p>{offre.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
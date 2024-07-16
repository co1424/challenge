import React, { useState, useEffect } from 'react';

function Character({ character }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://theofficeapi.dev/api/character/${character}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [character]);

  if (!data) return '...';

  return (
    <div>
      <h2>Characher Name: {data.name}</h2>
      <p>Gender: {data.gender}</p>
      <p>Marital Status: {data.marital}</p>
      <p>Workplace: {data.workplace}</p>
      <p>Actor/Actress: {data.actor}</p>



    </div>
  );
}

export default Character;

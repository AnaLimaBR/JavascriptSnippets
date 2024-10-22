import React, { useState, useEffect } from 'react';

// Componente de Lista Dinâmica
const DynamicList = () => {
  // Estado para armazenar a lista de itens
  const [items, setItems] = useState([]);

  // Função para simular a obtenção de novos itens
  const fetchNewItems = () => {
    // Simulando novos itens com um timestamp
    const newItem = `Item ${items.length + 1} - ${new Date().toLocaleTimeString()}`;
    setItems(prevItems => [...prevItems, newItem]);
  };

  // Hook para simular atualizações em tempo real
  useEffect(() => {
    const intervalId = setInterval(fetchNewItems, 2000); // Atualiza a cada 2 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, [items]);

  return (
    <div>
      <h1>Lista Dinâmica</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;

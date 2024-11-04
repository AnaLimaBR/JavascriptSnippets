import React, { useState, useEffect } from 'react';

function TemaAutomatico() {
    // Estado para armazenar o tema atual ('light' ou 'dark')
    const [tema, setTema] = useState('light');

    useEffect(() => {
        // Função para atualizar o tema com base nas preferências do sistema
        const atualizarTema = (e) => {
            setTema(e.matches ? 'dark' : 'light');
        };

        // Verifica a preferência do tema do sistema e define o inicial
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setTema(mediaQuery.matches ? 'dark' : 'light');

        // Adiciona o listener para atualizar o tema ao vivo quando o sistema muda
        mediaQuery.addEventListener('change', atualizarTema);

        // Remove o listener quando o componente for desmontado
        return () => mediaQuery.removeEventListener('change', atualizarTema);
    }, []);

    return (
        <div className={`app ${tema}`}>
            <h1>Este é o tema {tema === 'dark' ? 'Escuro' : 'Claro'}</h1>
            <p>O tema do site muda conforme as configurações do seu sistema operacional!</p>
        </div>
    );
}

export default TemaAutomatico;

// CLASSES CSS DEVEM SER ADICIONADAS AO PROJETO: .app.light {
//    background-color: #ffffff;
//    color: #333333;
//}

//.app.dark {
//   background-color: #333333;
//    color: #ffffff;
//}

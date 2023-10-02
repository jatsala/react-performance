import React, { useMemo, useCallback, useState } from 'react';

// useMemo --> React.memo() --> Funciones Creacionales que deben memorizar algo
// useCallback --> React.useCallback() --> Memorizan valores de listados en la dependencia. Funciones en linea

const MiComponente = () => {

    const [name, setName] = useState('');

    const names = ['Martin', 'Eric'];

    const getName = useCallback(
        () => {
            // obtenemos un nombre aleatorio
            const random = Math.floor(Math.random() * (names.length - 1));
            setName(names[random]);
        },
        [name],
    )

    const clearName = useCallback(
        () => {
            setName(null)
        },
        [second],
    )


    return (
        <h1>Mi Componente</h1>
    )
}

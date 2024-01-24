require('./bootstrap');
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import EffectCleanUp from './bases/02-useEffect/effectCleanUp'
import { RandomNumber } from './bases/02-useEffect/ramdonNumber';
import { AllPost } from './bases/03-evaliacion/allPost';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count + 1);
    };

    const decrementar = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
};

// Componente principal
export const App = () => {
    return (
        <div>
            <AllPost></AllPost>
        </div>
    );
};

// Renderiza la aplicación en el elemento root
createRoot(document.getElementById("root")).render(<App />);

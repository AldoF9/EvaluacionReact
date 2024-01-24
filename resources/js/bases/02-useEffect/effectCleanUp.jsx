import React, { useState } from "react";

const EffectCleanUp = () => {
    const [showComponent, setshowComponent] = useState(false);

    const handleChangeFlag = () => {
        setshowComponent(prev => !prev);
    };

    return (
        <>
            <h1>Effect Clean Up</h1>
            <hr />
            <h3>
                Componente: {''}
                {showComponent === false
                    ? 'componente desmontado'
                    : 'componente montado'}
            </h3>
            <button onClick={handleChangeFlag}>
                {!showComponent ? 'montar' : 'desmontar'}
            </button>
        </>
    );
};

export default EffectCleanUp;

import { useState } from "react"

export const MultipleCounter = () => {
    const [counters, setCounters] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = counters;

    const handleCounter = (numeroContador) => {
        setCounters((asignar) => ({
            ...asignar,
            [numeroContador]: asignar[numeroContador] + 1,
        }));
    }

    return (
        <>
            <h1>MultipleCounter</h1>
            <hr></hr>

            <h3>Counters</h3>
            <div>
                <h5>counter1: {counter1}</h5>
                <h5>counter2: {counter2}</h5>
                <h5>counter3: {counter3}</h5>
            </div>

            <div>
                <button onClick={() => handleCounter('counter1')}>counter1</button>
                <button onClick={() => handleCounter('counter2')}>counter2</button>
                <button onClick={() => handleCounter('counter3')}>counter3</button>
            </div>
        </>
    )
}

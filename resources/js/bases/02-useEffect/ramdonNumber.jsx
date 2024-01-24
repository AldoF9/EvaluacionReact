import { useEffect, useState } from "react";

const handleFetchRandomNumber = async () => {
    const url =
        'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

    const response = await fetch(url);

    const data = await response.text();
    console.log(data);
    //throw new Error('500 internal');
    return +data;
}


export const RandomNumber = () => {
    const [number, setnumber] = useState(0);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState();
    useEffect(() => {
        handleFetchRandomNumber().then(setnumber).catch(error => setisError(error.message));
    }, []);

    useEffect(() => {
        if (number) setisLoading(false);
    }, [number]);

    useEffect(() => {
        if (isError) setisLoading(false);
    }, [isError]);
    return (
        <>
            {isLoading ? <h2>Loading...</h2> : <h1>Random number: {number}</h1>}

            {!isLoading && isError && <h3>{isError}</h3>}

        </>
    );
};

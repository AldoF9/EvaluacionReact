import { useEffect } from "react";

export const Message = () => {
    useEffect(() => {
        const handleMouseMove = () => {
            console.log(':)');
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <h1>Me renderize</h1>
        </>
    );
};

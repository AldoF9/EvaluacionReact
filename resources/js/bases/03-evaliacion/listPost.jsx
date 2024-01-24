import { useEffect, useState } from "react";
import { CreatePost } from "./createPost";

const handleListPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts?userId=1';

    const response = await fetch(url);

    const data = await response.json();
    return data;
}

export const ListPost = () => {
    const [nota, setNota] = useState([]);

    useEffect(() => {
        handleListPost()
            .then((data) => {
                setNota(data);
            })
            .catch(error => setisError(error.message));
    }, []);


    return (
        <>
            <CreatePost />
            <div>
                <ul>
                    {nota.map((note) => (
                        <li key={note.id}>
                            <strong>{note.title}</strong>
                            <p>{note.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

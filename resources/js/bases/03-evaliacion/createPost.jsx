import { useState } from "react";

export const CreatePost = () => {
    const [datos, setdatos] = useState({
        title: '',
        body: '',
    });
    const [showForm, setShowForm] = useState(false);

    const { title, body } = datos;

    const handleChange = (e) => {
        setdatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    body,
                    userId: 1,
                }),
            });

            const data = await response.json();

        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <button onClick={() => setShowForm(!showForm)}>Crear nota</button>
            {showForm && (
                <div>
                    <h2>Crear Nota</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label style={{ marginRight: '5px' }}>Título: </label>
                            <input
                                className='form-control'
                                placeholder='ej: el principito'
                                type='text'
                                name='title'
                                value={title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label style={{ marginRight: '5px' }}>Cuerpo: </label>
                            <input
                                className='form-control'
                                placeholder='...'
                                type='text'
                                name='body'
                                value={body}
                                onChange={handleChange}
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>
                            Crear Post
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};


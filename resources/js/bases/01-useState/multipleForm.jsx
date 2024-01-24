import { useState } from "react";

export const multipleForm = () => {
    const [datos, setdatos] = useState({
        email: '',
        password: '',
    });

    const { email, password } = datos;

    const handleChange = (e) => {
        setdatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', datos);
    };
    return (
        <>
            <h1>Multiple Input Form</h1>
            <hr />

            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Email address</label>
                    <input
                        className='form-control'
                        placeholder='Enter email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        className='form-control'
                        placeholder='Password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </form>
        </>
    );
};

import React, { useState } from 'react';
import axios from 'axios';

function ResponderLogin({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/authenticate/responder', { username, password });
            const token = response.data;
            if (token) {
                localStorage.setItem('responderToken', token);
                onLogin({ username });
            } else {
                setError('Login failed');
            }
        } catch (error) {
            setError('Invalid username or password');
            console.error("Responder login error:", error);
        }
    };

    return (
        <div>
            <h2>Responder Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default ResponderLogin;

import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/authenticate/user', { username, password });
            const token = response.data; // Directly using the response data as the token

            if (token) {
                localStorage.setItem('token', token);
                onLogin({ username }); // Passing username or some user identifier to the parent component
                console.log("Token stored and user logged in"); // Debug: Confirmation of token storage and login
            } else {
                setError('Login failed');
                console.log("Login failed: No token received"); // Debug: Log failure case
            }
        } catch (error) {
            setError('Invalid username or password');
            console.error("Login error:", error); // Debug: Log caught error
        }
    };

    return (
        <div>
            <h2>Login</h2>
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

export default Login;

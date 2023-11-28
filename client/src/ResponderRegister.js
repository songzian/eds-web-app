import React, { useState } from 'react';
import axios from 'axios';

function ResponderRegister() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const responderData = { name, phone, longitude: parseFloat(longitude), latitude: parseFloat(latitude), password };
            const response = await axios.post('/api/register/responder', responderData);
            console.log("Registration response:", response.data);
            // Handle post-registration logic (e.g., redirect to login)
        } catch (error) {
            setError('Error in registration');
            console.error("Responder registration error:", error);
        }
    };

    return (
        <div>
            <h2>Responder Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div>
                    <label>Longitude:</label>
                    <input type="number" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
                </div>
                <div>
                    <label>Latitude:</label>
                    <input type="number" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default ResponderRegister;

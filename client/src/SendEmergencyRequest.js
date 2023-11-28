import React, { useState } from 'react';
import axios from 'axios';

function SendEmergencyRequest() {
    const [emergencyData, setEmergencyData] = useState({
        emergencyLevel: 1,
        emergencyType: "",
        latitude: 0,
        longitude: 0
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(1234);
            const token = localStorage.getItem('token');

            const response = await axios.post('/api/user/send_request', emergencyData, {headers: { authorization: `Bearer ${token}` }});
            console.log("Emergency request sent:", response.data);
            // Optionally add a success message or redirect here
        } catch (error) {
            console.error('Error sending emergency request:', error);
        }
    };

    const handleChange = (e) => {
        setEmergencyData({...emergencyData, [e.target.name]: e.target.value});
    };

    return (
        <div>
            <h2>Send Emergency Request</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Emergency Level:</label>
                    <input type="number" name="emergencyLevel" value={emergencyData.emergencyLevel} onChange={handleChange} required />
                </div>
                <div>
                    <label>Emergency Type:</label>
                    <input type="text" name="emergencyType" value={emergencyData.emergencyType} onChange={handleChange} required />
                </div>
                <div>
                    <label>Latitude:</label>
                    <input type="number" name="latitude" value={emergencyData.latitude} onChange={handleChange} required />
                </div>
                <div>
                    <label>Longitude:</label>
                    <input type="number" name="longitude" value={emergencyData.longitude} onChange={handleChange} required />
                </div>
                <button type="submit">Send Request</button>
            </form>
        </div>
    );
}

export default SendEmergencyRequest;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ResponderHistory() {
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const token = localStorage.getItem('responderToken');
                const response = await axios.get('/api/responder/search', {headers: { authorization: `Bearer ${token}` }});
                setHistories(response.data);
            } catch (error) {
                console.error('Error fetching history:', error);
            }
        };

        fetchHistory();
    }, []);

    const handleAccept = async (historyId) => {
        try {
            const token = localStorage.getItem('responderToken');
            await axios.post(`/api/responder/accept/${historyId}`, {}, {headers: { authorization: `Bearer ${token}` }});
            setHistories(histories.filter(history => history.id !== historyId)); // Remove accepted history from the list
        } catch (error) {
            console.error('Error accepting history item:', error);
        }
    };

    return (
        <div>
            <h2>Responder History</h2>
            {histories.map(history => (
                <div key={history.id} className="history-item">
                    <p><strong>ID:</strong> {history.id}</p>
                    <p><strong>Caller Name:</strong> {history.caller?.name}</p>
                    <p><strong>Caller Phone:</strong> {history.caller?.phone}</p>
                    <p><strong>Emergency Level:</strong> {history.emergencyLevel}</p>
                    <p><strong>Emergency Type:</strong> {history.emergencyType}</p>
                    <p><strong>Latitude:</strong> {history.latitude}</p>
                    <p><strong>Longitude:</strong> {history.longitude}</p>
                    <p><strong>Status:</strong> {history.status}</p>
                    <p><strong>Start Time:</strong> {history.startTime}</p>
                    {/* <p><strong>Rating:</strong> {history.rating}</p> */}
                    <button onClick={() => handleAccept(history.id)}>Accept</button>
                </div>
            ))}
        </div>
    );
}

export default ResponderHistory;

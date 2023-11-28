import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserHistory() {
    
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        const fetchHistoryByStatus = async (status) => {
            const token = localStorage.getItem('token');
            const response = await axios.get(`/api/dispatch-history/search?status=${status}`, { headers: { authorization: `Bearer ${token}` } });
            return response.data;
        };

        const fetchAllHistories = async () => {
            try {
                const statuses = ['pending', 'dispatched', 'arrived', 'finished'];
                const historyPromises = statuses.map(status => fetchHistoryByStatus(status));
                const historiesByStatus = await Promise.all(historyPromises);
                setHistories(historiesByStatus.flat());
            } catch (error) {
                console.error('Error fetching histories:', error);
            }
        };

        fetchAllHistories();
    }, []);
    const handleFinishRequest = async (historyId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(`/api/dispatch-history/finished`, {}, {
                params: { id: historyId },
                headers: { authorization: `Bearer ${token}` }
            });
            // Update the histories state to reflect the change
            setHistories(histories.filter(history => history.id !== historyId));
        } catch (error) {
            console.error('Error finishing request:', error);
        }
    };

    const handleRateHistory = async (historyId, rating) => {
        try {
            const token = localStorage.getItem('token');
            console.log(historyId);
            console.log(rating);
            await axios.post(`/api/dispatch-history/rate`, {}, {
                params: { id: historyId, rating:rating },
                headers: { authorization: `Bearer ${token}` }
            });
            // Update the history's rating in the state
            setHistories(histories.map(history => 
                history.id === historyId ? { ...history, rating: rating } : history
            ));
        } catch (error) {
            console.error('Error rating history:', error);
        }
    };

    return (
        <div>
            <h2>User History</h2>
            {histories.map(history => (
                <div key={history.id} className="history-item">
                    <p><strong>ID:</strong> {history.id}</p>
                    <p><strong>Caller Name:</strong> {history.caller.name}</p>
                    <p><strong>Caller Phone:</strong> {history.caller.phone}</p>
                    <p><strong>Emergency Level:</strong> {history.emergencyLevel}</p>
                    <p><strong>Emergency Type:</strong> {history.emergencyType}</p>
                    <p><strong>Latitude:</strong> {history.latitude}</p>
                    <p><strong>Longitude:</strong> {history.longitude}</p>
                    <p><strong>Status:</strong> {history.status}</p>
                    <p><strong>Start Time:</strong> {history.startTime}</p>
                    <p><strong>Rating:</strong> {history.rating}</p>
                    {/* Additional details can be added here */}
                    {history.status !== 'finished' && (
                        <button onClick={() => handleFinishRequest(history.id)}>Mark as Finished</button>
                    )}
                    {/* Rating input and button */}
                    {typeof history.rating === 'undefined' || history.rating === null ? (
                        <div>
                            <select onChange={(e) => handleRateHistory(history.id, e.target.value)} defaultValue="">
                                <option value="" disabled>Rate this</option>
                                {[...Array(10).keys()].map(num => (
                                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <p>Rating: {history.rating}</p>
                    )}
                    {/* <button onClick={() => handleFinishRequest(history.id)}>Mark as Finished</button> */}
                </div>
            ))}
        </div>
    );
}

export default UserHistory;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ResponderHistory() {
    const [availableHistories, setAvailableHistories] = useState([]);
    const [pendingHistories, setPendingHistories] = useState([]);
    const [ongoingHistories, setOngoingHistories] = useState([]);
    const [finishedHistories, setFinishedHistories] = useState([]);
    const [showSection, setShowSection] = useState('available'); // 'available', 'pending', 'ongoing', or 'finished'


    useEffect(() => {
        const fetchAvailableHistories = async () => {
            try {
                const token = localStorage.getItem('responderToken');
                const response = await axios.get('/api/responder/search', { headers: { authorization: `Bearer ${token}` } });
                setAvailableHistories(response.data);
            } catch (error) {
                console.error('Error fetching available histories:', error);
            }
        };

        const fetchClassifiedHistories = async () => {
            try {
                const token = localStorage.getItem('responderToken');
                const statuses = ['dispatched', 'arrived', 'finished'];
                let histories = [];
                for (const status of statuses) {
                    const response = await axios.get(`/api/dispatch-history/search?status=${status}`, { headers: { authorization: `Bearer ${token}` } });
                    histories = histories.concat(response.data);
                }
                // setClassifiedHistories(histories);
                // setPendingHistories(histories.filter(h => h.status === 'pending'));
                setOngoingHistories(histories.filter(h => h.status === 'dispatched' || h.status === 'arrived'));
                setFinishedHistories(histories.filter(h => h.status === 'finished'));
            } catch (error) {
                console.error('Error fetching classified histories:', error);
            }
        };

        fetchAvailableHistories();
        fetchClassifiedHistories();
    }, []);

    const handleAccept = async (historyId) => {
        try {
            const token = localStorage.getItem('responderToken');
            await axios.post(`/api/responder/accept/${historyId}`, {}, {headers: { authorization: `Bearer ${token}` }});
            setAvailableHistories(availableHistories.filter(history => history.id !== historyId)); // Remove accepted history from the list
        } catch (error) {
            console.error('Error accepting history item:', error);
        }
    };

    const renderHistoryItems = (histories) => {
        return histories.map(history => (
            <div key={history.id} className="history-item">
                {/* Display history details */}
                <p><strong>ID:</strong> {history.id}</p>
                <p><strong>Caller Name:</strong> {history.caller?.name}</p>
                    <p><strong>Caller Phone:</strong> {history.caller?.phone}</p>
                    <p><strong>Emergency Level:</strong> {history.emergencyLevel}</p>
                    <p><strong>Emergency Type:</strong> {history.emergencyType}</p>
                    <p><strong>Latitude:</strong> {history.latitude}</p>
                    <p><strong>Longitude:</strong> {history.longitude}</p>
                    <p><strong>Status:</strong> {history.status}</p>
                    <p><strong>Start Time:</strong> {history.startTime}</p>
                    <p><strong>Rating:</strong> {history.rating}</p>
                {history.status === 'pending' && (
                    <button onClick={() => handleAccept(history.id)}>Accept</button>
                )}
            </div>
        ));
    };
    return (
        <div>
        <h2>Responder Histories</h2>
        
        <div className="history-section-buttons">
            <button onClick={() => setShowSection('available')}>Available Histories</button>
            {/* <button onClick={() => setShowSection('pending')}>Pending Histories</button> */}
            <button onClick={() => setShowSection('ongoing')}>Ongoing Histories</button>
            <button onClick={() => setShowSection('finished')}>Finished Histories</button>
        </div>

        {showSection === 'available' && (
            <div>
                <h3>Available Histories</h3>
                {renderHistoryItems(availableHistories)}
            </div>
        )}
        {/* {showSection === 'pending' && (
            <div>
                <h3>Pending Histories</h3>
                {renderHistoryItems(pendingHistories)}
            </div>
        )} */}
        {showSection === 'ongoing' && (
            <div>
                <h3>Ongoing Histories</h3>
                {renderHistoryItems(ongoingHistories)}
            </div>
        )}
        {showSection === 'finished' && (
            <div>
                <h3>Finished Histories</h3>
                {renderHistoryItems(finishedHistories)}
            </div>
        )}
    </div>
    );
}

export default ResponderHistory;

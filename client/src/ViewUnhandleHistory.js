import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewUnhandledHistory() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const token = localStorage.getItem('user');
                const response = await axios.get('/api/dispatch-history/search?status=pending', { headers: { Authorization: token } });
                setHistory(response.data);
            } catch (error) {
                console.error('Error fetching history:', error);
            }
        };

        fetchHistory();
    }, []);

    return (
        <div>
            <h2>Unhandled History</h2>
            {/* Display history data here */}
            {/* ... */}
        </div>
    );
}

export default ViewUnhandledHistory;

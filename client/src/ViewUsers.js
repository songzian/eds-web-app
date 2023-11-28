import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewUsers() {
    const [users, setUsers] = useState([]);
    console.log('Rendering ViewUsers component');

    useEffect(() => {
        const token = localStorage.getItem('token');
        // console.log(token);
        axios.get('/api/user/self', { headers: { authorization: `Bearer ${token}` } })
            .then(response => {
                // console.log('Response data:', response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.phone}</li>
                ))}
            </ul>
        </div>
    );
}

export default ViewUsers;

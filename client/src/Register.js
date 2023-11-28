// // src/components/AddUser.js
// import React, { useState } from 'react';
// import axios from 'axios';

// function AddUser() {
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/api/user/add', { name, phone });
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//             <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
//             <button type="submit">Add User</button>
//         </form>
//     );
// }

// export default AddUser;
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    // console.log(123);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to register a new user
            const response = await axios.post('/api/register/user', { name, phone, password });

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Register User</button>
        </form>
    );
}

export default Register;

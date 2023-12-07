const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const axios = require('axios');
const cors = require('cors');
app.use(cors());
// app.use(express.json());



app.get('/', (req, res) => {
  res.send('Express Server is up and running!');
});
// const axios = require('axios');
const qs = require('qs');  // querystring library
// Handle user registration



app.post('/api/register/user', async (req, res) => {
    try {
        const { name, phone, password } = req.body;
        console.log("Received request body:", req.body);

        // Validate input fields
        if (!name || !phone || !password) {
            return res.status(400).send('Name, phone, and password are required');
        }

        // Prepare the request data
        const userData = {
            name,
            phone,
            password
        };
        // console.log(userData);
        // POST request to your new registration endpoint
        const edsApiResponse = await axios.post('http://localhost:8080/register/user', userData);
        res.json(edsApiResponse.data);
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).send('Internal Server Error');
    }
});





// User Login Endpoint
app.post('/api/authenticate/user', async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log("Received login request:", req.body);
  
      // Validate the presence of username and password
      if (!username || !password) {
        return res.status(400).send('Username and password are required');
      }
  
      // Construct the login request to EDS API
      const loginData = {
        username,
        password
      };
  
      // POST request to EDS API for user authentication
      const edsAuthResponse = await axios.post('http://localhost:8080/authenticate/user', loginData);
      
      // Forward the response from EDS API to the client
    //   res.json(edsAuthResponse.data);
    // console.log(edsAuthResponse.data );
    //   res.json({ token: edsAuthResponse.data });
    res.send(edsAuthResponse.data);
    } catch (error) {
      console.error('Error authenticating user:', error.message);
      res.status(500).send('Internal Server Error');
    }
  });

  // Middleware for token verification

//   const verifyToken = (req, res, next) => {
//     console.log("Headers received:", req.headers);
//     const token = req.headers['authorization'];
//     console.log("ver ",token);
//     if (!token) {
//         return res.status(403).send('A token is required for authentication');
//     }
//     try {
//         // Forward the request if token exists
//         next();
//     } catch (error) {
//         return res.status(401).send('Invalid Token');
//     }
// };

// app.get('/api/user/all', async (req, res) => {
    
//     const token = req.headers['authorization'];
//     // console.log(token);
//     try {
//         const response = await axios.get('http://localhost:8080/user/all', { headers: { Authorization: token } });
//         res.json(response.data);
//     } catch (error) {
//         console.error('Error in fetching users:', error.message);
//         res.status(500).send('Internal Server Error');
//     }
// });
app.get('/api/user/self', async (req, res) => {
    const token = req.headers['authorization'];
    try {
        // console.log(123);
        const response = await axios.get('http://localhost:8080/user/self', { headers: { Authorization: token } });
        res.json(response.data);
    } catch (error) {
        console.error('Error in fetching user data:', error.message);
        res.status(500).send('Internal Server Error');
    }
});
// Handle responder registration
app.post('/api/register/responder', async (req, res) => {
    try {
        const responderData = req.body;
        console.log("Received responder registration request:", responderData);

        // Here, add any validation logic if needed

        // POST request to the EDS API for responder registration
        const edsApiResponse = await axios.post('http://localhost:8080/register/responder', responderData);
        res.json(edsApiResponse.data);
    } catch (error) {
        console.error('Error registering responder:', error.message);
        res.status(500).send('Internal Server Error');
    }
});


// Responder Login Endpoint
app.post('/api/authenticate/responder', async (req, res) => {
    try {
        const loginData = req.body;
        console.log("Received responder login request:", loginData);

        // Validate input fields if necessary

        // POST request to EDS API for responder authentication
        const edsAuthResponse = await axios.post('http://localhost:8080/authenticate/responder', loginData);
        res.send(edsAuthResponse.data);
    } catch (error) {
        console.error('Error authenticating responder:', error.message);
        res.status(500).send('Internal Server Error');
    }
});


// Send Emergency Request
app.post('/api/user/send_request', async (req, res) => {
    try {
        const requestData = req.body;
        const token = req.headers['authorization'];
        // console.log(requestData);
        // console.log(token);
        const response = await axios.post('http://localhost:8080/user/send_request', requestData, { headers: { Authorization: token } });
        // console.log(response);
        res.json(response.data);
    } catch (error) {
        console.error('Error sending emergency request:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

// Fetch Unhandled Requests for Responders
app.get('/api/responder/search', async (req, res) => {
    try {
        const token = req.headers['authorization'];
        // console.log(token);
        const response = await axios.get('http://localhost:8080/responder/search', { headers: { Authorization: token } });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching responder history:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

// Fetch Unhandled History for Users
app.get('/api/dispatch-history/search', async (req, res) => {
    try {
        
        const token = req.headers['authorization'];
        // console.log(4321);
        // console.log('123',token);
        const status = req.query.status; // assuming 'status' is a query parameter
        // console.log(status);
        const response = await axios.get(`http://localhost:8080/dispatch-history/search?status=${status}`, { headers: { Authorization: token } });
        // console.log(response);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching dispatch history:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api/responder/accept/:historyId', async (req, res) => {
    try {
        const historyId = req.params.historyId;
        const token = req.headers['authorization'];

        // Forward the request to the EDS API
        const response = await axios.post(`http://localhost:8080/responder/accept/${historyId}`, {}, { headers: { Authorization: token } });
        res.json(response.data);
    } catch (error) {
        console.error('Error accepting history item:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api/dispatch-history/finished', async (req, res) => {
    try {
        const { id } = req.query; // Assuming the ID is sent as a query parameter
        const token = req.headers['authorization'];

        // Forward the request to the EDS API
        const response = await axios.post(`http://localhost:8080/dispatch-history/finished?id=${id}`, {}, { headers: { Authorization: token } });
        res.json(response.data);
    } catch (error) {
        console.error('Error finishing request:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api/dispatch-history/arrived', async (req, res) => {
    try {
        const { id } = req.query; // Assuming the ID is sent as a query parameter
        const token = req.headers['authorization'];
        console.log(id);
        // Forward the request to the EDS API
        const response = await axios.post(`http://localhost:8080/dispatch-history/arrived?id=${id}`, {}, { headers: { Authorization: token } });
        console.log(21);
        res.json(response.data);
    } catch (error) {
        console.error('Error finishing request:', error.message);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/api/dispatch-history/rate', async (req, res) => {
    try {
        const { id, rating } = req.query;
        const token = req.headers['authorization'];
        // console.log(id);

        // console.log(rating);
        // console.log(token);
        // Forward the request to the EDS API
        
        const response = await axios.post(`http://localhost:8080/dispatch-history/rate?id=${id}&rating=${rating}`, {}, { headers: { Authorization: token } });
        res.json(response.data);
    } catch (error) {
        console.error('Error rating history:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

// New endpoint to search for histories based on distance
app.get('/api/responder/search_distance', async (req, res) => {
    try {
        const { latitude, longitude, radius } = req.query;
        const token = req.headers['authorization'];

        // Validate the required parameters
        if (!latitude || !longitude || !radius) {
            return res.status(400).send('Latitude, longitude, and radius are required');
        }
        // console.log(latitude);
        // console.log(longitude);
        // console.log(radius);
        // Construct the URL for the service
        const serviceUrl = `http://localhost:8080/responder/search_distance?latitude=${latitude}&longitude=${longitude}&radius=${radius}`;

        // Make a GET request to the service
        const response = await axios.get(serviceUrl, { headers: { Authorization: token } });
        // console.log(1);
        // Send back the response from the service
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching history based on distance:', error.message);
        res.status(500).send('Internal Server Error');
    }
});
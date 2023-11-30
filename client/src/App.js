import React, { useState, useEffect } from 'react';
import './App.css';
import Register from './Register';
import ResponderRegister from './ResponderRegister';
import ViewUsers from './ViewUsers';
import Login from './Login';
import ResponderLogin from './ResponderLogin';
import ResponderHistory from './ResponderHistory'; // Import the ResponderHistory component
import UserHistory from './UserHistory'; // Import the UserHistory component
import SendEmergencyRequest from './SendEmergencyRequest';

function App() {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isResponder, setIsResponder] = useState(false);
  const [showUserHistory, setShowUserHistory] = useState(false);
  const [showResponderHistory, setShowResponderHistory] = useState(false);

  useEffect(() => {
    // Check if user data and role (responder/user) are stored in local storage
    const storedUser = localStorage.getItem('user');
    const storedRole = localStorage.getItem('role'); // Get the role from local storage
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsResponder(storedRole === 'responder'); // Set isResponder based on stored role
    }
  }, []);

  const handleLogin = (userData, responder = false) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('role', responder ? 'responder' : 'user'); // Store the role in local storage
    setUser(userData);
    setIsResponder(responder);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('role'); // Remove the role from local storage
    setUser(null);
    setIsResponder(false);
  };

  const toggleRegistration = () => {
    setIsRegistering(!isRegistering);
  };

  const toggleResponderMode = () => {
    setIsResponder(!isResponder);
  };

  return (
    <div className="App">
      <h1>EDS WEB APP</h1>

      {!user && !isRegistering && (
        <div>
          <button onClick={toggleResponderMode}>Switch to {isResponder ? "User" : "Responder"}</button>
          <button onClick={toggleRegistration}>{isResponder ? "Responder Register" : "Register"}</button>
          {/* <button onClick={() => setIsRegistering(false)}>{isResponder ? "Responder Login" : "Login"}</button> */}
        </div>
      )}

      {isRegistering && !isResponder && (
        <div>
          <h2>Register</h2>
          <Register />
          <button onClick={toggleRegistration}>Back to Login</button>
        </div>
      )}

      {isRegistering && isResponder && (
        <div>
          <h2>Responder Register</h2>
          <ResponderRegister />
          <button onClick={toggleRegistration}>Back to Login</button>
        </div>
      )}
      {user && !isResponder && (
        <div>
          <h2>Welcome, {user.username}!</h2>
{/*           
          <UserHistory /> Render user history component */}
          <SendEmergencyRequest /> {/* Add the SendEmergencyRequest component */}

          {/* <ViewUsers /> */}
          <button onClick={handleLogout}>Logout</button>

          <button onClick={() => setShowUserHistory(!showUserHistory)}>
            {showUserHistory ? 'Hide' : 'View'} My History
          </button>
          {showUserHistory && <UserHistory />}

          
        </div>
      )}
      {user && isResponder && (
        <div>
          <h2>Welcome Responder, {user.username}!</h2>
          {/* <ResponderHistory /> Render responder history component */}
          <button onClick={handleLogout}>Logout</button>

          <button onClick={() => setShowResponderHistory(!showResponderHistory)}>
            {showResponderHistory ? 'Hide' : 'View'} Responder Histories
          </button>
          {showResponderHistory && <ResponderHistory />}
        </div>
      )}
{/*       
      {user && (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <ViewUsers />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )} */}

      {!user && !isRegistering && !isResponder && <Login onLogin={(userData) => handleLogin(userData, false)} />}
      {!user && !isRegistering && isResponder && <ResponderLogin onLogin={(userData) => handleLogin(userData, true)} />}
    </div>
  );
}

export default App;

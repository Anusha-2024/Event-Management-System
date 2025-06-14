import React, { useState } from 'react';
import auth from '../services/auth';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);
  try {
    await auth.register({ username, email, password });
    alert('Registration successful! Please log in.');
    navigate('/login');
  } catch (err) {
    setError('Registration failed. Please try again.');
  }
};


  return (
    <>
      <style>{`
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: url('https://image.shutterstock.com/image-photo/membership-concept-template-registration-register-260nw-1122441203.jpg') no-repeat center center/cover;
        }

        .register-box {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 15px;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .register-box h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .register-box form {
          display: flex;
          flex-direction: column;
        }

        .register-box label {
          margin-bottom: 10px;
          color: #444;
          font-weight: bold;
        }

        .register-box input {
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }

        .register-box button {
          background-color: #00b894;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .register-box button:hover {
          background-color: #008b72;
        }

        .error-text {
          color: red;
          text-align: center;
          margin-top: -10px;
        }
      `}</style>

      <div className="register-container">
        <div className="register-box">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
            />
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <button type="submit">Register</button>
            {error && <p className="error-text">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;

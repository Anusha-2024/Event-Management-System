import React, { useState } from 'react';
import auth from '../services/auth';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await auth.login(email, password);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <style>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: url('https://images.unsplash.com/photo-1521790945508-bf2a36314e85') no-repeat center center/cover;
        }

        .login-box {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 15px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .login-box h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .login-box form {
          display: flex;
          flex-direction: column;
        }

        .login-box label {
          margin-bottom: 10px;
          color: #444;
          font-weight: bold;
        }

        .login-box input {
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }

        .login-box button {
          background-color: #4a00e0;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .login-box button:hover {
          background-color: #3700b3;
        }

        .error-text {
          color: red;
          text-align: center;
          margin-top: -10px;
        }
      `}</style>

      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
            {error && <p className="error-text">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

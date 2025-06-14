import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <style>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #0052cc;
          padding: 10px 20px;
          color: white;
        }

        nav h1 {
          font-size: 24px;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 15px;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        nav a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid white;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <nav>
        <h1>Event Management</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/my-bookings">My Bookings</Link></li>
          {!token ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          ) : (
            <li>
              <div className="avatar" title="Logout" onClick={handleLogout}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="User Avatar"
                />
              </div>
            </li>
          )}
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

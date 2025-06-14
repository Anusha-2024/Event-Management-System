import React from 'react';

function AdminDashboard() {
  return (
    <>
      <style>{`
        .admin-dashboard {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 40px;
          background: linear-gradient(to right, rgba(107, 17, 203, 0.73), rgba(37, 116, 252, 0.7));
          min-height: 100vh;
          color: white;
        }

        .admin-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .admin-header h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .admin-header p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .admin-content {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .placeholder-box {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 20px;
          width: 250px;
          height: 220px;
          border-radius: 15px;
          text-align: center;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .placeholder-box:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
          cursor: pointer;
        }

        .placeholder-box img {
          width: 60px;
          height: 60px;
          margin-bottom: 15px;
          border-radius: 10px;
        }
      `}</style>

      <div className="admin-dashboard">
        <div className="admin-header">
          <h2>Admin Dashboard</h2>
          <p>Manage events, bookings, and feedback here.</p>
        </div>
        <div className="admin-content">
          <div className="placeholder-box">
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Events" />
            Events
          </div>
          <div className="placeholder-box">
            <img src="https://cdn-icons-png.flaticon.com/512/5953/5953761.png" alt="Bookings" />
            Bookings
          </div>
          <div className="placeholder-box">
            <img src="https://cdn-icons-png.flaticon.com/512/2583/2583347.png" alt="Feedback" />
            Feedback
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;

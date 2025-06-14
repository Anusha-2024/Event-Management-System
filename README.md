# 🎉 Event Management Website

A full-stack Event Management Web Application built using **React.js**, **Node.js**, **Express**, and **MySQL**. Users can register, login, view upcoming events, book tickets, and provide feedback. Admins can manage events and view all bookings.

---

## 🚀 Features

- 🔐 User & Admin Authentication (JWT)
- 📅 View and book events
- 📝 Submit feedback with star rating
- 📧 Booking confirmation email
- 🔢 OTP verification during booking
- 🧑‍💻 Admin dashboard for event management
- 🔍 Search with live filtering
- 🌐 Responsive UI with animations

---

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS in JSX
- **Backend**: Node.js, Express.js
- **Database**: MySQL (Workbench)
- **Authentication**: JWT, bcrypt
- **Other Tools**: Nodemailer, OTP Verification, Role-based Access

---

## 📸 Screenshots

### 🖥️ Welcome Page
![Welcome Page](./assets/screenshots/welcome.png)

### 🔐 Login Page
![Login Page](./assets/screenshots/login.png)

### 📅 Event Listings
![Events Page](./assets/screenshots/events.png)

> Make sure to save your images inside the path: `./assets/screenshots/`

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/event-management.git
cd event-management
```

### 2. Backend Setup

```bash
cd backend
npm install
```

- Configure MySQL credentials in `db.js`
- Run the SQL schema:
  ```sql
  SOURCE schema.sql;
  ```

- Start server:
  ```bash
  node server.js
  ```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

---

## ✅ Environment Variables

Create a `.env` file in the `backend/` folder and add:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=eventdb
JWT_SECRET=your_jwt_secret
EMAIL_USER=youremail@example.com
EMAIL_PASS=yourpassword
```

---

## 🧠 Future Enhancements

- Payment Integration (Razorpay / Stripe)
- QR Code Ticket Generation
- Admin Analytics Dashboard

---

## 🤝 Contributing

Contributions are welcome! 

---

## 📩 Contact

Created by **Anusha**  
📧 Gmail: **krianusha09@gmail.com**  

---

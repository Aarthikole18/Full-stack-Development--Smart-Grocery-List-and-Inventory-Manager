# 🛒 Smart Grocery List & Inventory Manager

## 📌 Project Overview

Smart Grocery List & Inventory Manager is a Full Stack MERN application designed to help users efficiently manage grocery inventory, monitor stock levels, track expiry dates, and receive low-stock alerts.

The system provides a centralized dashboard for inventory management, reducing food waste and ensuring essential items are always available.

This project demonstrates full-stack development skills including authentication, REST API development, database management, CRUD operations, dashboard analytics, and deployment.

---

## 🎯 Problem Statement

Managing grocery inventory manually can lead to:

* Overstocking items
* Running out of essential products
* Food wastage due to expired products
* Poor visibility into inventory levels

This application solves these problems by providing inventory tracking, expiry monitoring, and low-stock notifications.

---

## 🚀 Features

### User Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### Inventory Management

* Add Grocery Items
* View Inventory
* Delete Items
* Category Management
* Quantity Tracking

### Smart Alerts

* Low Stock Detection
* Expiry Date Monitoring
* Inventory Overview

### Dashboard Analytics

* Total Items Count
* Low Stock Summary
* Expiring Items Summary
* Category Statistics
* Inventory Analytics Chart

### Search Functionality

* Search Grocery Items
* Quick Inventory Lookup

---

## 🏗️ System Workflow

User Login/Register

↓

Add Grocery Item

↓

Store Data in MongoDB

↓

Inventory Dashboard

↓

Low Stock & Expiry Analysis

↓

Alerts & Analytics

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS
* Recharts

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Tools

* Git
* GitHub
* VS Code
* Postman

---

## 📂 Project Structure

Smart-Grocery-Inventory-Manager/

├── client/

│ ├── src/

│ ├── public/

│ ├── package.json

│

├── server/

│ ├── models/

│ ├── routes/

│ ├── middleware/

│ ├── server.js

│ ├── package.json

│

├── README.md

├── .gitignore

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/yourusername/Smart-Grocery-Inventory-Manager.git
```

### Backend Setup

```bash
cd server
npm install
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 🌐 API Endpoints

### Authentication

| Method | Endpoint      |
| ------ | ------------- |
| POST   | /api/register |
| POST   | /api/login    |

### Inventory

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /api/items     |
| POST   | /api/items     |
| DELETE | /api/items/:id |

---

## 📊 Dashboard Metrics

The dashboard displays:

* Total Grocery Items
* Low Stock Items
* Expiring Soon Items
* Categories Count
* Inventory Analytics


## 🧪 Testing

Backend APIs were tested using:

* Postman
* Browser Testing
* React Frontend Integration

---

## 🎓 Learning Outcomes

Through this project I learned:

* MERN Stack Development
* React State Management
* REST API Design
* MongoDB Integration
* JWT Authentication
* CRUD Operations
* Dashboard Development
* Git & GitHub Workflow
* Project Deployment

---

## 💼 Resume Description

Developed a full-stack Smart Grocery List & Inventory Manager using React.js, Node.js, Express.js, MongoDB, and JWT Authentication. Implemented inventory tracking, low-stock monitoring, expiry alerts, dashboard analytics, and secure user authentication while designing RESTful APIs and responsive user interfaces.

---

## 🔮 Future Enhancements

* Edit Inventory Items
* Barcode Scanner Integration
* Receipt OCR
* Shopping List Automation
* Family Sharing System
* Email Notifications
* Mobile Application
* AI-Based Demand Prediction

---

## 👩‍💻 Author

Aarthi Kole

Full Stack Development Project

Built using the MERN Stack for learning, portfolio development, and internship preparation.

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

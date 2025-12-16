# ☕ Coffee + Snacks eCommerce App

A **frontend-only eCommerce web application** built using **React, Tailwind CSS, Context API, and React Router**.
The app supports **Admin & User roles**, product management, cart, checkout, and order management — all handled using **LocalStorage** (no backend).

---

## 🚀 Live Features

### 👤 Authentication

* User Registration & Login
* Role-based access (Admin / User)
* Persistent login using LocalStorage

### 🛍️ Products

* Admin can **Add / Edit / Delete products**
* Users can **View & Search products**
* Category-based filtering

### 🛒 Cart

* Add / Remove products
* Quantity control
* Cart badge count
* Cart data saved in LocalStorage

### 💳 Checkout

* Address & payment selection (COD / UPI)
* Order summary
* Total price calculation

### 📦 Orders

* Users can view **their own orders**
* Admin can view **all orders**
* Admin can **delete orders**
* Order status system (Pending / Delivered)

### 🌙 UI / UX

* Light & Dark theme toggle
* Responsive layout (Desktop & Mobile)
* Toast notifications


---

## 🧠 Concepts Used

* React Functional Components
* React Hooks (`useState`, `useEffect`, `useContext`)
* Context API (Global State Management)
* React Router v6 (Protected & Admin Routes)
* Tailwind CSS (Utility-first styling)
* Role-Based Access Control
* LocalStorage Persistence

---

## 🧱 Project Structure

```
src/
├── Components/
│   ├── Navbar.jsx
│   ├── Card.jsx
│   ├── ProtectedRoute.jsx
│   └── AdminPath.jsx
├── Context/
│   ├── UserContext.jsx
│   ├── ProductContext.jsx
│   ├── CartContext.jsx
│   ├── OrderContext.jsx
│   └── ThemeContext.jsx
├── Pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── ListPage.jsx
│   ├── CartPage.jsx
│   ├── Checkout.jsx
│   ├── Orders.jsx
│   ├── AdminDashboard.jsx
│   └── AddProduct.jsx
├── App.jsx
└── main.jsx
```

---

## 🔐 Admin Access

> Admin users have special permissions:

* Access Admin Dashboard
* Add / Edit / Delete products
* View & manage all orders

Admin check is handled using:

```js
user?.isAdmin
```

---



## 📌 Future Improvements

* Pagination for products
* Payment gateway integration
* Admin order status updates UI
* Image upload instead of URL
* Backend integration (Node + MongoDB)

---

## 🏆 Author

Developed by **[Arunima . S]**
Frontend Developer | React | Tailwind | JavaScript

---



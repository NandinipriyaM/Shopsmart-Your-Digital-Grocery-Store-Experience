# Shopsmart-Your-Digital-Grocery-Store-Experience
# 🛒 ShopSmart – The Future of Grocery Shopping

A seamless full-stack grocery web app that transforms traditional grocery runs into a personalized, on-demand digital experience.

**🚀 Live Demo**: [Watch ShopSmart in Action](https://drive.google.com/file/d/1QQ-yr-fA6tw8dEN7iUccoh2lhwShAhKK/view?usp=sharing)  
**📂 Source Code**: [Explore the Codebase](https://drive.google.com/drive/folders/1Y3BBnCyVa4CzUMns6Kigm-9T69UQXg0l?usp=drive_link)

---

## 👥 Team

| Role           | Name                              |
|----------------|-----------------------------------|
| Team Leader    | Masina Nandini Priya              |
| Team Members   | Makineedi Lakshmi Narayana        |
|                | P Keerthirani                     |
|                | Sayantan Jana                     |
| Team ID        | **LTVIP2025TMID44631**            |

---

## 🌟 Why ShopSmart?

Imagine your grocery store personalized, on-demand, and at your fingertips.  
**ShopSmart** is not just an app — it’s a grocery ecosystem that anticipates your needs, simplifies choices, and delivers delight.

- 🛍 Smart product discovery  
- 🚚 Flexible delivery scheduling  
- 🔐 Secure payments & order tracking  
- 📊 Admin dashboard with real-time control  
- 📱 Intuitive, mobile-responsive design  

---

## 🧠 Scenario Spotlight

**Meet Priya** – a working professional who loves fresh cooking but hates time-drains.  
**ShopSmart** empowers her to shop smart with:

- 🎯 Tailored suggestions  
- ⏰ Scheduled deliveries  
- 💳 Seamless checkout  
- 🤝 Friendly customer support

---

## 🔑 Features

### 🧑‍💻 User Side

- 🔐 Registration & secure authentication  
- 🛒 Add to cart & multi-payment checkout  
- 🔎 Smart search & category filtering  
- 🚚 Real-time order tracking  
- 🌱 Product reviews & personalized recommendations

### 🛠 Admin Side

- 📦 Product & inventory management  
- 📋 Order & user management  
- 📊 Dashboard with analytics  
- 💬 Content, campaign & support tools

---

## 🧱 Architecture

- **Client–Server Model**  
- **RESTful API Communication**  
- **MongoDB with Mongoose ODM**  
- **Role-Based Access** for Users and Admins  
- **Modular Codebase** for scalability and clarity

---

## 🛠 Tech Stack

- **Frontend**: ReactJS, React Router, Axios, Bootstrap  
- **Backend**: Node.js, Express.js, Mongoose  
- **Database**: MongoDB  
- **Dev Tools**: Vite, Git, VS Code, Postman

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js – [Download](https://nodejs.org/en/download/)  
- MongoDB – [Install](https://www.mongodb.com/try/download/community)  
- Git – [Install](https://git-scm.com/downloads)  
- VS Code or any IDE

### ⚙️ Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd shopsmart

# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` to experience ShopSmart locally.

---

## 🧬 Mongoose Models (Example)

```js
const productSchema = new mongoose.Schema({
  productname: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  countInStock: Number,
  rating: Number,
  dateCreated: { type: Date, default: Date.now }
});
```

Other models: `User`, `Order`, `Category`, `AddToCart`

---

## 📅 Milestones

1. ✅ Project Setup & Folder Structure  
2. ✅ Backend Routes, Auth & API Integration  
3. ✅ MongoDB Connection & Schema Modeling  
4. ✅ Frontend UI with Dynamic API Binding  
5. ✅ Admin Dashboard & Final Testing  

---

## 🧭 Project Flow

- **Users**: Register → Browse → Add to Cart → Checkout → Track Orders  
- **Admins**: Login → Manage Inventory/Orders → View Reports → Support Users

---







## 🖼 Demo Screens



- 🏠 Landing Page
   

![image](https://github.com/user-attachments/assets/2d448a64-9cd2-4bc3-b84b-cd163458ac6e)









- 🔐 Login / Register  
 
![image](https://github.com/user-attachments/assets/fffd24d2-8ad5-44b4-a632-b70b6d674563)






- 🧺 Product Listings  
 ![image](https://github.com/user-attachments/assets/802024b9-3196-4280-8d17-383f2c706fbd)

- 🛒 My Cart  
![image](https://github.com/user-attachments/assets/84c23e89-043b-4bfe-89cb-d97501cdb2bf)

- 📦 My Orders
- ![image](https://github.com/user-attachments/assets/3ce302fd-f1b3-4a72-9a81-6699143d63fb)

- 🧾 Checkout Page
- ![image](https://github.com/user-attachments/assets/e705628d-20a5-4df7-ba50-b57a4299a2d3)
- 🔐 Admin Login
![image](https://github.com/user-attachments/assets/61e9fb19-21a8-4101-8f77-221812826049)

- 📊 Admin Dashboard
![image](https://github.com/user-attachments/assets/6131ea91-b141-4d22-8191-1dc07a9c5c53)

🎥 [Watch Full Demo](https://drive.google.com/file/d/1QQ-yr-fA6tw8dEN7iUccoh2lhwShAhKK/view?usp=sharing)

---

## 💡 Innovation Quotient

- 🔁 Realtime order flow using efficient state syncing  
- 📚 Role-driven UI rendering for scalability  
- 🧠 Recommendation engine (purchase-history based)  
- ⚙️ Clean API architecture for plug-and-play modularity

---

## 📜 License

This project is licensed under the **MIT License** – feel free to use, remix, and evolve it.

---

## 🤝 Connect with Us

Built with 💚 by **Team ShopSmart**  
Have feedback, ideas, or want to contribute? Let's connect.

---

**⚡ Let’s reinvent grocery shopping — one smart decision at a time.**

# Wanderlust App

## 🌍 Introduction
Wanderlust is a **travel and adventure platform** that allows users to explore and share their travel experiences. Users can **view listings, add new destinations, leave reviews, and interact with a community of travelers**. The app integrates **Mapbox for location-based features** and is built using the **MERN stack** with server-side rendering via EJS.

---

## 🚀 Features

✅ **User Authentication** (Signup/Login)  
✅ **CRUD Functionality** (Create, Read, Update, Delete Listings)  
✅ **Responsive UI** using **Bootstrap**  
✅ **Reviews & Ratings System**  
✅ **Map Integration** with **Mapbox**  
✅ **Secure Routes with Authentication & Authorization**  
✅ **Flash Messages for User Notifications**  

---

## 🛠️ Tech Stack

### **Frontend**:
- **HTML, CSS, EJS** (Server-side rendering)
- **Bootstrap** (For responsiveness & styling)
- **FontAwesome** (For icons)

### **Backend**:
- **Node.js & Express.js** (Server & API handling)
- **MongoDB & Mongoose** (Database)
- **Passport.js** (User authentication)
- **Express-Session & Connect-Flash** (User session handling & flash messages)
- **Mapbox API** (For map features)

---

## 📂 Project Structure

```
Wanderlust-App/
│── public/
│   ├── css/
│   │   ├── style.css
│   │   ├── rating.css
│   ├── js/
│   │   ├── script.js
│── views/
│   ├── includes/
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   ├── flash.ejs
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── show.ejs
│   │   ├── edit.ejs
│   ├── users/
│   │   ├── register.ejs
│   │   ├── login.ejs
│── routes/
│   ├── listings.js
│   ├── reviews.js
│   ├── users.js
│── models/
│   ├── listing.js
│   ├── review.js
│── config/
│   ├── passport.js
│── app.js
│── .env
│── package.json
│── README.md
```

---

## ⚡ Installation & Setup

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/wanderlust-app.git
cd wanderlust-app
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**
Create a `.env` file and add:
```sh
MAPBOX_TOKEN=your_mapbox_api_key
SESSION_SECRET=your_secret_key
```

### 4️⃣ **Run the Server**
```sh
node app.js  # or use nodemon app.js
```

### 5️⃣ **Open in Browser**
Visit `http://localhost:8080`

---


## 🔒 Authentication & Security
- **Passport.js** is used for authentication (local strategy).
- **BCrypt.js** for password hashing.
- **Session-based authentication** with Express-Session.
- **Authorization checks** ensure only owners can edit/delete listings.

---

## 🌟 Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-new`).
3. Commit your changes.
4. Push to your branch and create a PR.


---

## 📞 Contact
For any queries, feel free to reach out via:
- LinkedIn: [Mahesh Kumar Kamalakar](https://linkedin.com/in/mahesh-kumar-kamalakar)
- Twitter: [@maheshkamalakar](https://twitter.com/maheshkamalakar)

---

🚀 **Happy Coding & Safe Travels! 🌍✈️**


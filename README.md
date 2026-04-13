# 🎬 YouTube Clone (MERN Stack)

This project is a full-stack YouTube Clone built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It replicates the core features of YouTube such as video browsing, playback, channel management, and user interaction.

---

## 🚀 Features

### 🔐 Authentication

* User login using JWT authentication
* Token-based authorization for protected routes

### 📺 Home Page

* Displays all videos in a grid layout
* Search functionality to filter videos by title
* Category-based filtering (React, CSS, Backend, etc.)
* Sidebar navigation (UI-based)

### 🎥 Video Page

* Video playback using HTML5 video player
* Like and Dislike functionality
* Video description display
* Suggested videos (UI + basic logic)
* Dummy buttons: Share, Download, Save

### 💬 Comments System

* Add comments
* Edit comments
* Delete comments
* Token-based access for comment actions

### 📡 Channel System

* Create a channel
* View channel details
* Display all videos of a channel
* Channel UI with banner and subscribe button (UI only)

### ⬆️ Upload Video

* Upload video details (title, description, thumbnail, category)
* Link video to a specific channel
* Stored in MongoDB

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* React Router DOM
* Axios

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB Atlas

### Authentication:

* JSON Web Token (JWT)

---

## 📂 Project Structure

```
YouTube-Clone/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── AppRoutes.jsx
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd YouTube-Clone
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints (Sample)

### Auth

* POST `/api/auth/login`

### Videos

* GET `/api/videos`
* GET `/api/videos/:id`
* PUT `/api/videos/:id/like`
* PUT `/api/videos/:id/dislike`

### Channels

* POST `/api/channels`
* GET `/api/channels/:id`

### Comments

* POST `/api/comments/:videoId`
* PUT `/api/comments/:commentId`
* DELETE `/api/comments/:commentId`

---

## ⚠️ Notes

* Some features like **Subscribe, Share, Download** are UI-based and not functionally implemented.
* Video URLs are static/dummy links for demonstration.
* Suggested videos are based on simple logic (not AI recommendation).

---

## 🎯 Learning Outcomes

* Built a full-stack application using MERN
* Implemented RESTful APIs
* Learned JWT authentication
* Managed relationships between collections (Video ↔ Channel)
* Created dynamic UI using React

---

## 📌 Conclusion

This project demonstrates a functional and scalable YouTube-like platform with essential features.
It focuses on core backend logic, frontend integration, and user interaction while maintaining a clean UI structure.

---

##  full-stack MERN course project.

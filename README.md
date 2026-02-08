![Screenshot 2025-06-20 180630](https://github.com/user-attachments/assets/11dfc364-e930-48b0-8d81-d79beac49930)


![Screenshot 2025-06-20 212948](https://github.com/user-attachments/assets/83207e23-e924-4658-aa17-9b26da776744)


![Screenshot 2025-06-20 213659](https://github.com/user-attachments/assets/f0df6703-9cc9-4d63-a286-84c5c5cfc4bb)


🏋️ Fitness Tracker App

A full-stack fitness tracking web application that allows users to log workouts, track progress over time, and receive personalized fitness recommendations.
The application is built using the MERN stack with Firebase Authentication and AI-powered fitness insights.

📌 Overview

The Fitness Tracker App helps users maintain consistency in their fitness journey by providing:

Secure authentication

Daily workout logging

Visual progress tracking

AI-based personalized fitness tips

Exercise reference library

The project is designed with scalability, clean architecture, and real-world use cases in mind.

🧱 Tech Stack

Frontend

React.js

Tailwind CSS

Backend

Node.js

Express.js

Database

MongoDB

Authentication

Firebase Authentication

AI Integration

OpenAI / GenAI

Deployment

Frontend: Vercel

Backend: Render / Heroku

## 📂 Project Structure

```bash
fitness-tracker-app/
├── frontend/                # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/                 # Node.js + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── package.json
│
├── README.md
└── .env.example


✨ Features

🔐 User Authentication
Secure login and signup using Firebase Authentication.

📝 Workout Logging
Add, update, and delete daily workout entries.

📊 Progress Dashboard
Visual representation of workout history and performance trends.

🤖 AI Fitness Assistant
Personalized workout and recovery suggestions using GenAI.

💪 Exercise Library
Browse exercises with instructions and reference videos.

🔍 Search & Filter
Quickly find workouts by category or name.

🌙 Dark Mode Support
Switch between light and dark themes.

🛠️ Setup Instructions

Follow the steps below to run the project locally.

📦 1. Clone the Repository
git clone https://github.com/your-username/fitness-tracker-app.git
cd fitness-tracker-app

📥 2. Install Dependencies
Frontend
cd frontend
npm install

Backend
cd ../backend
npm install

🔐 3. Environment Variables

Create a .env file inside the backend directory and configure the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
OPENAI_API_KEY=your_openai_api_key


⚠️ Important: Never commit your .env file to GitHub.

▶️ 4. Run the Application
Start Backend Server
cd backend
npm start


Backend runs on: http://localhost:5000

Start Frontend Server (new terminal)
cd frontend
npm start


Frontend runs on: http://localhost:3000

✅ How to Use the Application

Register / Login using Firebase Authentication

Add workouts with exercise details, duration, and notes

View progress on the dashboard with charts and summaries

Get AI-powered fitness tips based on your workout history

Browse exercises from the exercise library

Switch themes using dark mode for better UX

🚀 Future Enhancements

Workout streak tracking.

Nutrition and calorie logging.

Social features (leaderboards, friends).

Advanced AI workout planning.

Mobile app version.

❗ Disclaimer

This project is built for educational and learning purposes.
AI-generated fitness suggestions should not replace professional medical advice.

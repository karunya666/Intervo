# Intervo: Technical Interview & Career Preparation Platform

![Intervo Home Page](https://github.com/user-attachments/assets/5b505ee7-26a0-452e-bad4-888f99b5d212)

**Live Demo:** https://intervo-realtime.vercel.app

Intervo is a full-stack AI-powered interview preparation platform designed to help aspiring software engineers improve their technical interview skills and career readiness. The platform combines collaborative coding interviews, real-time communication, coding practice, and AI-driven resume generation into a single seamless experience.

Users can participate in mock interviews, solve coding challenges collaboratively, communicate through live video and chat, and generate ATS-optimized resumes tailored for software engineering roles.

---

## 🚀 Key Features

### 🤝 Real-Time Collaborative Interviews

* Create and join live interview sessions.
* Conduct technical interviews in a collaborative environment.
* Real-time video calls and messaging powered by Stream.io.

### 💻 Integrated Coding Environment

* Monaco Editor integration for a professional coding experience.
* Execute code directly within interview sessions.
* Real-time collaboration between interviewer and candidate.

### 🧠 AI Resume Builder

* Generate ATS-optimized, recruiter-ready resumes.
* AI rewrites weak descriptions into professional achievement-oriented bullet points.
* Optimized specifically for Software Engineering, SDE, Frontend, Backend, and Full Stack roles.
* Export resumes as LaTeX for professional formatting and PDF generation.

### 📚 Problem Catalog

* Browse coding problems categorized by difficulty.
* Practice Easy, Medium, and Hard interview questions.
* Structured preparation workflow for technical interviews.

### 🔐 Secure Authentication

* Clerk-based authentication and user management.
* Secure sign-in and profile management.

### 📊 Session Management

* Create, join, and end interview sessions.
* Persistent storage of interview history and session data.
* View recent sessions and track participation.

### 🎨 Modern Responsive UI

* Built using TailwindCSS and DaisyUI.
* Fully responsive design across desktop and mobile devices.
* Clean and intuitive user experience.

---

## 🛠️ Tech Stack

### Frontend

* React 19
* Vite
* TailwindCSS
* DaisyUI
* TanStack React Query
* Monaco Editor
* Lucide React
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose ODM
* Clerk Authentication
* Stream.io SDK
* Inngest

### AI Integration

* Groq API
* Llama 3.3 70B Versatile
* ATS Resume Generation
* Resume Content Optimization

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 🏗️ Getting Started

### Prerequisites

Before running the project, ensure you have:

* Node.js installed
* MongoDB Atlas account
* Clerk account
* Stream.io account
* Inngest account
* Groq API key

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/karunya666/Intervo.git
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 4. Run Backend

```bash
cd backend
npm run dev
```

### 5. Run Frontend

```bash
cd frontend
npm run dev
```

---

## 🔑 Environment Configuration

### Backend `.env`

```env
MONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

INNGEST_EVENT_KEY=your_inngest_event_key

GROQ_API_KEY=your_groq_api_key

CLIENT_URL=http://localhost:5173

PORT=3000
```

### Frontend `.env`

```env
VITE_API_URL=http://localhost:3000/api

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

---

## 🌐 API Overview

| Route                                | Description                      |
| ------------------------------------ | -------------------------------- |
| POST /api/sessions                   | Create a new interview session   |
| GET /api/sessions/active             | Fetch active interview sessions  |
| GET /api/sessions/my-recent-sessions | Retrieve user's recent sessions  |
| GET /api/sessions/:id                | Get session details              |
| POST /api/sessions/:id/join          | Join an interview session        |
| POST /api/sessions/:id/end           | End an interview session         |
| GET /api/chat/token                  | Generate Stream chat token       |
| POST /api/resume/generate            | Generate ATS-optimized AI resume |

---

## 🔄 Platform Workflow

### Technical Interview Workflow

1. Host creates an interview session.
2. Participant joins the session.
3. Both users connect via video call and chat.
4. Users collaborate in real-time using the Monaco Editor.
5. Code is executed and evaluated.
6. Session data is stored for future reference.

### AI Resume Builder Workflow

1. User enters personal information, skills, education, projects, and experience.
2. AI analyzes and restructures the content.
3. Resume descriptions are enhanced using ATS best practices.
4. Professional LaTeX resume is generated.
5. User downloads the generated resume for PDF compilation.

---

## 🚀 Deployment

### Frontend

https://intervo-realtime.vercel.app

### Backend

https://intervo-iw41.onrender.com

### Database

MongoDB Atlas

---

## 🎯 Future Enhancements

* AI Mock Interviewer with voice-based interactions.
* AI-generated interview feedback and scoring.
* ATS Resume Score Analyzer.
* Personalized learning roadmap generation.
* LeetCode integration.
* Multi-language code execution support.
* Session recording and playback.
* Mentor-Mentee matching system.
* Competitive leaderboards and gamification.
* Migration to TypeScript.

---

## 👨‍💻 Author

**Karunya**

Built to help developers prepare for technical interviews, improve problem-solving skills, and accelerate their software engineering careers.

![Intervo Home Page](https://github.com/user-attachments/assets/5b505ee7-26a0-452e-bad4-888f99b5d212)

# Intervo: Collaborative Technical Interview Platform

**Live Demo:** https://intervo-realtime.vercel.app

Intervo is a full-stack web application designed as an interactive interview and problem-solving platform. It empowers users to create and join coding sessions with varying difficulty levels, conduct real-time video calls, and engage in live chat—making it an ideal solution for mock interviews and peer learning.

## 🚀 Key Features

- **Real-time Collaboration:** Integrated video calls and messaging via Stream.io for seamless communication between host and participant.
- **Integrated Code Editor:** Features the Monaco Editor for writing and testing code directly in the browser.
- **Session Management:** Create, join, and terminate interview sessions with persistent data storage in MongoDB.
- **Problem Catalog:** Browse and filter coding problems categorized by difficulty (Easy, Medium, Hard).
- **Secure Authentication:** User profile management and secure sign-in powered by Clerk.
- **Responsive UI:** A modern, mobile-friendly interface built with TailwindCSS and DaisyUI.

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js with Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** Clerk Express
- **Real-time:** Stream.io Chat & Node SDKs
- **Background Jobs:** Inngest for asynchronous task processing

### Frontend
- **Framework:** React 19 with Vite
- **Styling:** TailwindCSS & DaisyUI
- **State Management:** TanStack React Query
- **Code Editor:** Monaco Editor
- **Components:** Lucide React (icons), React Hot Toast (notifications)

## 🏗️ Getting Started

### Prerequisites
- Node.js installed
- MongoDB instance
- Accounts for Clerk, Stream.io, and Inngest

### Installation

1. Clone the repo
```bash
   git clone https://github.com/karunya666/Intervo.git
```

2. Install backend dependencies
```bash
   cd backend && npm install
```

3. Install frontend dependencies
```bash
   cd frontend && npm install
```

4. Run backend
```bash
   cd backend && npm run dev
```

5. Run frontend
```bash
   cd frontend && npm run dev
```

### Environment Configuration

Create a `.env` file in the **backend** directory:
```env
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
INNGEST_EVENT_KEY=your_inngest_event_key
CLIENT_URL=http://localhost:5173
PORT=3000
```

Create a `.env` file in the **frontend** directory:
```env
VITE_API_URL=http://localhost:3000/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## 🌐 API Overview

| Route | Description |
| :--- | :--- |
| `POST /api/sessions` | Create a new session |
| `GET /api/sessions/active` | Fetch all available sessions |
| `GET /api/sessions/my-recent-sessions` | Fetch user's past sessions |
| `GET /api/sessions/:id` | Get session by ID |
| `POST /api/sessions/:id/join` | Join an existing session |
| `POST /api/sessions/:id/end` | End a session |
| `GET /api/chat/token` | Generate Stream.io chat token |

## 🔄 Workflow Example

1. **Host** creates a session with a specific problem and difficulty.
2. **Participant** discovers and joins the session through the active sessions list.
3. Both users connect via **Stream.io** for video and live chat.
4. Users collaborate in real-time using the **Monaco Code Editor** and **Output Panel**.
5. The session concludes and data is persisted for history tracking.

## 🚀 Deployment

- **Frontend:** Deployed on [Vercel](https://intervo-realtime.vercel.app)
- **Backend:** Deployed on [Render](https://intervo-iw41.onrender.com)
- **Database:** MongoDB Atlas

## 🎯 Future Enhancements

- Migration to **TypeScript** for enhanced type safety.
- Integration with external problem sources like LeetCode.
- Session recording and playback capabilities.
- Mentor/mentee pairing system and gamification (leaderboards).
- Code execution support for multiple languages.

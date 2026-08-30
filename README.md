# CodeMeet

A real-time collaborative coding platform that enables developers to solve programming problems together, communicate through a shared workspace, execute code, submit solutions, and receive AI-powered feedback.

---

## Overview

CodeMeet is a full-stack collaborative coding platform designed for pair programming, coding practice, technical interviews, and collaborative problem-solving.

Two participants can join the same coding session and work together in real time — editing code simultaneously, communicating through an integrated chat, executing and submitting solutions, and receiving AI-generated feedback on their work.

The platform is built with a React frontend, a Node.js/Express backend, MongoDB for persistence, Clerk for authentication, Socket.IO for real-time communication, a dedicated Docker-based code execution engine, and Gemini for AI-powered code review.

---

## Features

### Real-Time Collaborative Coding

- Create a coding session with a selected problem
- Share a unique room ID with another participant
- Support for two users collaborating within the same session
- Real-time code synchronization via Socket.IO
- Real-time programming language synchronization
- Cursor position synchronization
- Session-based collaborative workspace

### Real-Time Chat

- Built-in session chat
- Real-time message delivery between participants
- Message synchronization via Socket.IO

### Online Code Editor

- Monaco Editor-based coding environment
- Support for multiple programming languages
- Language switching within an active session
- Reset functionality to restore starter code
- Code execution with custom input
- Solution submission against predefined test cases

### Code Execution

CodeMeet communicates with a dedicated Code Execution Engine, which:

- Executes user-submitted code within isolated Docker containers
- Captures `stdout` and `stderr` output
- Detects and reports compilation errors
- Detects and reports runtime errors
- Enforces execution timeouts
- Supports multiple programming languages

### Code Judging

Upon solution submission, the following sequence occurs:

1. CodeMeet sends the solution and associated test cases to the Code Engine.
2. The Code Engine executes the program against each test case.
3. Actual output is compared against expected output.
4. CodeMeet displays the resulting verdict.

Possible verdicts include:

| Verdict | Description |
|---|---|
| Accepted | Output matches expected result for all test cases |
| Wrong Answer | Output does not match expected result |
| Compilation Error | Submission failed to compile |
| Runtime Error | Submission failed during execution |
| Time Limit Exceeded | Execution exceeded the allotted time limit |

### AI Code Review

CodeMeet includes an AI-powered code review feature. For each submission, the AI provides:

1. An assessment of the approach taken
2. Time and space complexity analysis
3. Identification of bugs or mistakes
4. Suggested improvements or hints

The AI is explicitly instructed not to provide a complete solution, positioning it as a coding mentor rather than a solution generator.

### Authentication

Authentication is handled via Clerk. The following functionality requires an authenticated session:

- Creating sessions
- Joining sessions
- Submitting solutions
- Requesting AI code review
- Managing sessions

### Dashboard

The dashboard provides visibility into:

- Active sessions
- Recent session history
- Session creation
- Session statistics

### Session Management

Session hosts can:

- Create sessions
- Share room IDs with collaborators
- End sessions

Completed sessions are persisted and surfaced in the user's recent session history.

---

## Architecture

CodeMeet is composed of multiple independent services.

```
                         ┌──────────────────────┐
                         │      React App        │
                         │        (Vite)          │
                         └──────────┬───────────┘
                                    │
                     HTTP / Socket.IO
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   CodeMeet Backend    │
                         │   Node.js / Express    │
                         └──────────┬───────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
        ┌───────────┐        ┌─────────────┐       ┌────────────┐
        │  MongoDB  │        │    Clerk     │       │ Gemini AI  │
        │           │        │    Auth      │       │Code Review │
        └───────────┘        └─────────────┘       └────────────┘

                                    │
                                    │ HTTP
                                    ▼
                         ┌──────────────────────┐
                         │     Code Engine        │
                         │     REST API            │
                         └──────────┬───────────┘
                                    │
                                    ▼
                              ┌───────────┐
                              │  Docker   │
                              │Containers │
                              └───────────┘
```

The React frontend communicates with the backend over HTTP and Socket.IO for real-time features. The backend integrates with MongoDB for data persistence, Clerk for authentication, and Gemini for AI-generated code review. Code execution and judging are delegated to a separate Code Engine service, which runs submissions inside isolated Docker containers and returns results to the backend.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) |
| Backend | Node.js, Express |
| Database | MongoDB |
| Authentication | Clerk |
| Real-Time Communication | Socket.IO |
| Code Execution | Docker-based Code Engine |
| AI Code Review | Gemini |
| Code Editor | Monaco Editor |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [MongoDB](https://www.mongodb.com/) instance (local or hosted)
- [Docker](https://www.docker.com/) installed and running (required by the Code Engine service)
- Clerk account and API keys
- Gemini API key

### Installation

```bash
git clone https://github.com/your-username/codemeet.git
cd codemeet
```

Install dependencies for each service:

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### Environment Configuration

Create a `.env` file in the backend directory with the required configuration values:

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGODB_URI` | MongoDB connection string |
| `CLERK_SECRET_KEY` | Clerk authentication secret key |
| `GEMINI_API_KEY` | Gemini API key for AI code review |
| `CODE_ENGINE_URL` | Base URL of the Code Execution Engine |

### Running the Application

```bash
# Start the backend
cd server
npm start

# Start the frontend
cd client
npm run dev
```

The Code Execution Engine must be running separately and reachable at the URL configured in `CODE_ENGINE_URL`. Refer to the Code Engine's own README for setup instructions.

---

## Roadmap

- Support for sessions with more than two participants
- Persistent code history and version snapshots per session
- Expanded language support
- In-session video/voice communication
- Public problem library and difficulty filtering

---

## Contributing

Contributions are welcome. Please open an issue to discuss proposed changes before submitting a pull request.

## License

Distributed under the MIT License.

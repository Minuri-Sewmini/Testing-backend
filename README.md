

# 🚀 Node.js Backend Starter (MVC)

A clean and scalable **Node.js & Express** backend boilerplate integrated with **MongoDB Atlas**, following the **MVC architecture** and **ES Modules** syntax.

## 🛠 Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **Syntax:** ES Modules (`import`/`export`)
- **Containerization:** Docker

## 📂 Project Structure
- `src/models/` – Database Schemas
- `src/controllers/` – Logic & Functions
- `src/routes/` – API Endpoints
- `src/config/` – DB & Env Setup

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file in the root:
```env
PORT=5000
```

### 3. Run the App
**Development Mode:**
```bash
npm run dev
```

**Docker Mode:**
```bash
docker-compose up --build
```

---

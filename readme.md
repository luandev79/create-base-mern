# Fullstack Mern

_A ready-to-use fullstack structure for MERN (MongoDB, Express, React, Node.js) projects._

### 🚀 Features

-   **Backend**: Node.js, Express, MongoDB, Mongoose, JWT authentication, Bcrypt for password hashing, and more.
-   **Frontend**: React, React Router, Zustand, Axios for API calls, and more.

### 📦 Install

First step is to install the `fullstack-mern` package npm:

```bash
npx create-base-mern <project-name>
cd <project-name>
npm install
```

**Continue, add file .env with **

1. **Create a `.env` file in the root of your project.**
2. **Add your environment variables, for example:**
    ```plaintext
    MONGODB_URI=<your_mongodb_uri>
    JWT_SECRET=<your_jwt_secret>
    PORT=5000
    ```

### 📁 Project Structure

```bash
<project-name>/
    ├── backend/
    │ ├── config/
    │ ├── controllers/
    │ ├── middleware/
    │ ├── models/
    │ ├── routes/
    │ ├── utils/
    │ └── server.js
    ├── frontend/
    │ ├── public/
    │ ├── src/
    │ │ ├── components/
    │ │ ├── helpers/
    │ │ ├── hooks/
    │ │ ├── layouts/
    │ │ ├── stores/
    │ │ ├── pages/
    │ │ ├── App.jsx
    │ │ ├── index.jsx
    │ │ └── index.css
    │ └── index.html
    └── README.md
```

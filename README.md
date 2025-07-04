# 🛡️ Email OTP Auth API (Node.js + JWT)

A reusable authentication module built with Node.js, Express, MongoDB, and JWT — using email-based OTP verification (no passwords).

---

## 📦 Features

- Email-only login (no username/password)
- One-Time Password (OTP) authentication
- OTP expiry & hashing
- JWT-based session tokens
- Modular MVC architecture
- Middleware to protect routes
- Easily pluggable into any project

---

## 🔧 Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/email-otp-auth.git
cd email-otp-auth
pnpm install
```
2. **Create a .env file**

```bash
MONGO_URI=mongodb+srv://<your-mongo-connection>
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRY=1d
```
3. **Run the server**
```bash
pnpm dev
or
node src/index.js
```
##

## 🔐 API Endpoints

**POST /auth/login**

Send email to receive an OTP

```bash
{ "email": "test@example.com" }
```

**POST /auth/verify**

Verify OTP and receive JWT

```bash
{ "email": "test@example.com", "otp": "123456" }

```

**🛡️ GET /protected (for testing)**

Send JWT in header to access protected route

```bash
Authorization: Bearer <token>
```

# 2ndBuy Frontend

A React app for buying and selling books. Posting an item for sale is fast and easy.

## Environment Setup

Copy `.env.example` to `.env` and fill in your frontend environment variables:

```
BASE_API_URL=http://localhost:4000
PUBLIC_URL=https://your-frontend-url.com
```

- `BASE_API_URL` — The backend API base URL for proxying API/auth requests (e.g., `http://localhost:4000` for local development).
- `PUBLIC_URL` — The deployed frontend URL (or `http://localhost:3000` for local development).

## Proxy Setup (for Local Development)

API requests and authentication routes are proxied to the backend using `src/setupProxy.js`:

- `/api` and `/auth/google` are forwarded to the backend URL defined in your `.env` file (`BASE_API_URL`).
- Update this variable if your backend runs on a different port or host.

## Google OAuth

Google OAuth is handled by the backend. Ensure the backend's `CORS_ORIGIN` matches your frontend URL.

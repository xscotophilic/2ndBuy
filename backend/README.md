# 2ndBuy Backend

A simple app to buy and sell books. Posting an item for sale is fast and easy.

## Environment Setup

Copy `.env.example` to `.env` and fill in your secrets:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MONGO_URI=your-mongodb-uri
COOKIE_KEY=your-random-cookie-key
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

## Google OAuth Setup

Configure your Google Developer Console:

**Authorized JavaScript origins:**
- Local: `http://localhost:3000`
- Production: `https://secondbuy.herokuapp.com`

**Authorized redirect URIs:**
- Local: `http://localhost:4000/auth/google/callback`
- Production: `https://secondbuy.herokuapp.com/auth/google/callback`

**Both JavaScript origins and redirect URIs must be set for Google OAuth to work.**

## MongoDB URI Setup

Set your MongoDB connection string:

**Example values:**
- Local: `mongodb://localhost:27017/2ndBuy`
- Production (MongoDB Atlas): `mongodb+srv://<user>:<password>@cluster.mongodb.net/2ndBuy?retryWrites=true&w=majority`

**If using MongoDB Atlas (cloud):**

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/) and log in.
2. Select or create your project.
3. **Create a Cluster:**
   - Click "Build a Database" and follow the prompts to create a free or paid cluster.
4. **Add a Database User:**
   - Go to "Database Access" in the left menu.
   - Click "Add New Database User".
   - Set a username and password (use these in your `MONGO_URI`).
   - Assign appropriate privileges ("Read and write to any database" is typical for dev).
5. **Allow Network Access (IP Whitelist):**
   - Go to "Network Access" in the left menu.
   - Click "Add IP Address".
   - To allow your current IP, click "Add Current IP Address".
   - To allow all IPs (not recommended for production), enter `0.0.0.0/0`.
6. **Get Your Connection String:**
   - Go to "Clusters" > "Connect" > "Connect your application".
   - Copy the provided connection string and replace `<user>` and `<password>` with your database user credentials.

**Make sure your database user has the correct permissions and your IP is whitelisted in Atlas if using cloud.**

## Cookie Key Setup

Set a secure random string for session encryption:

**Example value:**
- `COOKIE_KEY=your-random-cookie-key`

**Use a long, random string. Do not share or commit your real key.**

## CORS Origin Setup

Set the allowed frontend origin for API requests:

**Example values:**
- Local: `http://localhost:3000`
- Production: `https://secondbuy.xscotophilic.art`

**This must match your frontend URL for authentication and API calls to work.**

## Node Environment

Set the environment mode:

**Example values:**
- Development: `NODE_ENV=development`
- Production: `NODE_ENV=production`

**Affects security settings and error handling.**

## Port (Optional)

You can set a custom port for the backend:

**Example:**
- `PORT=4000`

**Defaults to 4000 if not set.**

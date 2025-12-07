# Project Setup Instructions

## 1. Database Setup

1. Install PostgreSQL if you haven't already.
2. Create a new database named `coachme_db`.
3. Run the SQL script located at `server/database.sql` to create the tables and initial data.

## 2. Backend Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory with the following content:

   ```env
   PORT=4000
   DATABASE_URL=postgresql://postgres:password@localhost:5432/coachme_db
   JWT_SECRET=your_super_secret_key_change_this
   ```

   _Replace `postgres:password` with your actual PostgreSQL username and password._

4. Start the backend server:
   ```bash
   npm run dev
   ```

## 3. Frontend Setup

1. Open a new terminal and navigate to the root directory of the project.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## 4. Verification

1. Open your browser and go to `http://localhost:3000`.
2. Try to register a new account.
3. Try to log in.
4. Check the "Formations" page to see if courses are loaded from the database.
5. Send a message via the "Contact" page.

## Features Implemented

- **Authentication**: Login and Register with JWT.
- **Database**: PostgreSQL schema with Users, Courses, Bookings, Contact Submissions, and Audit Logs.
- **API Integration**: Frontend pages (Login, Register, Contact, Formations) are connected to the Backend API.
- **Booking System**: Users can book sessions via the Booking page, which are saved to the database.
- **User Dashboard**: Users can view their bookings and status in a dedicated dashboard.
- **Audit Logging**: Critical actions (Login, Register, Contact Submission) are logged in the `audit_logs` table.

# Library Management and Task Manager API

## Question 1: Library Management System
**Description**: A MySQL database for managing library operations including members, books, and loans.

**Setup**:
1. Run `library.sql` in MySQL to create the database and tables.
2. Sample data is included for testing.


## Question 2: Task Manager API
**Description**: A CRUD API for managing users and tasks using Node.js and MySQL.

**Setup**:
1. Create a `.env` file using `.env.example`.
2. Run `task_manager.sql` to set up the database.
3. Install dependencies with `npm install`.
4. Start the server with `npm start`.

**Endpoints**:
- `GET /users` - List all users
- `POST /users` - Create a user
- `GET /tasks` - List all tasks
- `POST /tasks` - Create a task

# 📚 Library Management & Task Manager API

![MySQL](https://img.shields.io/badge/MySQL-8.0+-blue)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![REST API](https://img.shields.io/badge/REST-API-orange)

A dual-component system featuring:
1. **Library Management Database** - Complete MySQL solution for tracking books, members, and loans
2. **Task Manager API** - Full CRUD REST API for managing users and tasks

## 🌟 Features

### Library Management (MySQL)
- Relational database design with 3 normalized tables
- Proper constraints (PK, FK, UNIQUE, CHECK)
- Sample dataset for immediate testing
- ER Diagram: [View ERD](link_to_your_ERD_image.png)

### Task Manager API (Node.js + Express)
- ✅ Full CRUD operations
- 📦 MySQL database integration
- 🛡️ Error handling middleware
- 📅 Date validation for tasks
- 🔍 JOIN operations between Users & Tasks

## 🛠️ Tech Stack
- **Database**: MySQL 8+
- **Backend**: Node.js 18+, Express 4.x
- **Libraries**: MySQL2, Dotenv, CORS

## 🚀 Quick Start

### Prerequisites
- MySQL Server
- Node.js 18+
- npm 9+

```bash
# Clone repository
git clone https://github.com/yourusername/project-repo.git
cd project-repo

# Install dependencies
npm install

# Set up databases
mysql -u root -p < library.sql
mysql -u root -p < task_manager.sql

# Configure environment
cp .env.example .env
# Edit .env with your credentials

# Start server
npm start

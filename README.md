#  Task API – TypeScript + Express + Prisma

A simple RESTful Task Management API built using **TypeScript**, **Express.js**, and **Prisma ORM**, with PostgreSQL as the database.

---

## Features

- ✅ Create, read, update, and soft-delete tasks
- 🧠 Built with TypeScript for type safety
- 🧩 Modular code using controllers, routes, and middleware
- 🛡️ Request validation middleware
- 🗃️ Prisma ORM for database handling
- 🧪 Ready for testing via Postman or Thunder Client

---

## 🛠️ Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://www.npmjs.com/package/nodemon)


---

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/JohnMwihaki/simple-typescript-api
cd simple-api
```
## install dependencies

```
npm install
```
## Configure Environment Variables
Create a .env file in the root directory:
```bash
DATABASE_URL="postgresql://your_user:your_password@localhost:5432/your_db_name"
PORT=4400
```
## Setup the Prisma Database

```bash
npx prisma migrate dev --name init
npx prisma generate
```
## Run App
```
npm run dev
```



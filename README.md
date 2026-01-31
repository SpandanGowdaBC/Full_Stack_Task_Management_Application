# TaskManager - Full Stack Task Management Application

A production-ready, full-stack Task Management Web Application built with Node.js, Express, MongoDB, and Vanilla JavaScript. This project demonstrates clean API architecture, responsive design, and full CRUD functionality.

## 🚀 Live Demo & Screenshots

![Task Manager Dashboard](./screenshots/app_dashboard.png)
*Real screenshot of the application dashboard featuring task creation, filtering, and management.*

> **Live Demo:** [https://full-stack-task-management-applicat.vercel.app/](https://full-stack-task-management-applicat.vercel.app/)

## 📋 Features
- **Full CRUD Ops**: Create, Read, Update, and Delete tasks seamlessly.
- **Dynamic Filtering**: View tasks by status (Pending, In Progress, Completed).
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Smart API Logic**: Automatic switching between local development and production endpoints.
- **Glassmorphic UI**: Modern aesthetic with smooth transitions and HSL color palettes.

## 💻 Tech Stack
- **Frontend**: HTML5, Vanilla CSS, Vanilla JavaScript.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose ODM).
- **Hosting**: Prepared for Vercel (Frontend) and Render (Backend).

## 🛠️ Local Setup Instructions

### Prerequisites
- **Node.js**: [Download here](https://nodejs.org/)
- **MongoDB**: Local installation or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account.

### 1. Project Initialization
```bash
git clone https://github.com/SpandanGowdaBC/Full_Stack_Task_Management_Application.git
cd Full_Stack_Task_Management_Application
```

### 2. Backend Configuration
1. Enter the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file in the `backend` folder:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```
4. Start the server: `npm start`

### 3. Frontend Execution
1. Simply open `frontend/index.html` in your browser.
2. Alternatively, use a local server:
   ```bash
   # From the root directory
   npx serve frontend
   ```

## 🌐 Making it Live (Deployment)

### Backend (Render.com) - RECOMMENDED
1. Create a "Web Service" on [Render](https://render.com).
2. Connect your GitHub repository.
3. Use the following:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. **Environment Variables**: Add `MONGO_URI` with your Atlas string.

### Frontend (Vercel.com) - RECOMMENDED
1. Import your repo into [Vercel](https://vercel.com).
2. Select the `frontend` folder as the **Root Directory**.
3. Vercel will automatically use the included `vercel.json` to route your API calls correctly.

## 🤝 Contributing
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License
Distributed under the MIT License.

## 👤 Author
**Spandan Gowda B C**
- GitHub: [@SpandanGowdaBC](https://github.com/SpandanGowdaBC)
- Project Link: [https://github.com/SpandanGowdaBC/Full_Stack_Task_Management_Application](https://github.com/SpandanGowdaBC/Full_Stack_Task_Management_Application)

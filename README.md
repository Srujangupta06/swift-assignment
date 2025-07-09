
# Swift Frontend Internship Assignment


This is a Single Page Application (SPA) built with React, where data is dynamically fetched from the JSONPlaceholder API (dummy data) to simulate real-world scenarios.

- 🌐 **Frontend**: React
- 🎨 **Styling**: Tailwind CSS
- 📦 **Deployment**:  Frontend (Vercel)

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v22.14.0+)
- npm
- Git

---

## 📁 Folder Structure



 - src/
   - components
   - screens
     - Profile.jsx
        - '/' - path
     - Comments.jsx
        - '/comments' - path
     - NotFound.jsx
        - '*' - path
   - services
     - userService.js
        - Used to fetch API Logic to get User Data
     - commentsService.js
        - Used to fetch API related to comments data
   - utils
     - constants.js 
        - Hardcoded data
        - API URL's
     - helpers.js
   - context
     - UserContext.jsx
        

---

## Global State Management

- React Context
    - User Context
        user: User Info
        setUser: Function to update User Info


## ♻️ Reusable Components

1) Header
2) User Avatar
3) Input (ReadOnly)
4) TableRow
5) FilterItem
6) SearchBar

## 🧩 Core Features

- Routing
- Mobile Responsive
- Pagination
    - Comments Per Page (Changable)
- Searching By name,email,comment
- Sorting By PostId, Name, Email
- Loading Shimmer Effects


## ⚙️ Running Locally


🌐 Frontend Setup using Vite
npm install
npm run dev
Opens app on https://swiftassignment-wheat.vercel.app



👨‍🎓 Developed By
- Srujan Kandakurthi
- Email: srujan93811@gmail.com
- LinkedIn: https://www.linkedin.com/in/srujan-kandakurthi
# Swift Frontend Internship Assignment

- To run development Server using Vite

    - npm run dev

- For Production Build

    - npm run build

- Tailwind Installation using Vite

- React Router-Dom configuration

    Two Screens
        - User Profile path:'/'
        - Comments path:'/comments'

- Additionally added Not Found Page for catching Errors and better User Experience(UX)

# Deployed Url 
- Vercel
    - https://swiftassignment-theta.vercel.app/
# Icons

Installed React-icons
    - npm i react-icons

# Folder Structure

- Inside src
    - components
    - screens
        - Comments.jsx
        - Profile.jsx
    - context
        - UserContext.jsx
    - utils
        - constants.js
        - helpers.js
    - services
        - userService.js
            - user service for fetching user data from api
        - commentsService.js
            - Comments Service for fetching comments data from api


# Global State Management

- React Context
    - User Context
        user: User Info
        setUser: Function to update User Info

# Reusable Components

1) Header
2) User Avatar
3) Input (ReadOnly)
4) TableRow
5) FilterItem
6) SearchBar

# Core Features

- Routing
- Mobile Responsive
- Pagination
    - Comments Per Page (Changable)
- Searching By name,email,comment
- Sorting By PostId, Name, Email
- Loading Shimmer Effects

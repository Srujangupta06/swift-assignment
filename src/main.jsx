import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./screens/Profile.jsx";
import Comments from "./screens/Comments.jsx";
import NotFound from "./screens/NotFound.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Profile />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <RouterProvider router={appRouter} />
  </UserContextProvider>
);

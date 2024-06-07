import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import OtpInputPage from "./pages/OtpInput.jsx";
import UidProvider from "./context/UidContext.jsx";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from './pages/Register.jsx'
import HomePage from "./pages/Home.jsx";
import ActivityPage from "./pages/Activity.jsx";
// import EmailContextProvider from "./context/EmailContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/otp",
    element: <OtpInputPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/home/activity/:id",
    element: <ActivityPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UidProvider>
      <RouterProvider router={router} />
    </UidProvider>
  </React.StrictMode>
);

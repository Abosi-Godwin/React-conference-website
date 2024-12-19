import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import NoPage from "./pages/noPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Speaker from "./pages/speakersPage.jsx";

import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Hello world</h1>,
        errorElement: <NoPage />
    },
    {
        path: "about",
        element: <AboutPage />,
        errorElement: <NoPage />
    },
    {
        path: "speaker/:id",
        element: <Speaker />,
        errorElement: <NoPage />
    },
    {
        path: "speakers/speaker/:speakerId",
        element: <Speaker />,
        errorElement: <NoPage />
    }
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

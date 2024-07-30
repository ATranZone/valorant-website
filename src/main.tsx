import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Agents from "./components/Agents/Agents.tsx";
import Maps from "./components/Maps/Maps.tsx";
import ErrorPathPage from "./components/ErrorPathPage/ErrorPathPage.tsx";
import "./index.css";
const router = createBrowserRouter([
	{ path: "/", element: <Home />, errorElement: <ErrorPathPage /> },
	{ path: "/agents", element: <Agents /> },
	{ path: "/maps", element: <Maps /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

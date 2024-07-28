

// Our `index.js` file is currently broken. (It's not rendering anything!) You'll
// need to update it to provide routing to our application using
// `createBrowserRouter` and `RouterProvider`.


import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes) 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);

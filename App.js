import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// importing files 
import Body from "./src/components/body.js";
import User from "./src/components/user.js";
import Status from "./src/components/status.js";
import Priority from "./src/components/priority.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {

    return (
        <>
            <Outlet></Outlet>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/user",
                element: <User />
            },
            {
                path: "/status",
                element: <Status />
            },
            {
                path: "/priority",
                element: <Priority />
            },
        ],
    },
]);

root.render(<RouterProvider router={appRouter} />);
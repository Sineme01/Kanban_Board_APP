import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// importing files 
import Body from "./src/components/body.js";
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
        ],
    },
]);

root.render(<RouterProvider router={appRouter} />);
import { createBrowserRouter } from "react-router-dom";
import LayoutPrivate from "../layout/LayoutPrivate";
import LayoutPublic from "../layout/LayoutPublic";
import Dashboards from "../pages/Dashboards";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
    {
        path: '/dashboards',
        element: <LayoutPrivate />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Dashboards />,
            },
        ]
    }
]);
import { createBrowserRouter } from "react-router-dom";
import LayoutPrivate from "../layout/LayoutPrivate";
import LayoutPublic from "../layout/LayoutPublic";
import Aboutus from "../pages/Aboutus";
import BookDetails from "../pages/BookDetails";
import Contact from "../pages/Contact";
import Dashboards from "../pages/Dashboards";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ModalBooks from "../pages/ModalBooks";
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
                path: 'book',
                element: <ModalBooks />,
            },
            {
                path: '/book/:id',
                element: <BookDetails />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/about',
                element: <Aboutus />,
            },
            {
                path: '/contact',
                element: <Contact />,
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
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Checkout from "../Pages/Checkout";
import Bookings from "../Pages/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'checkout/:id',
                element: <PrivateRoute><Checkout /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: 'bookings',
                element: <PrivateRoute><Bookings /></PrivateRoute>
            }
        ]
    },
]);

export default router;
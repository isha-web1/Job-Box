import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout/>,
        errorElement : <h1>404 not found</h1>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : 'register',
                element : <Register/>
            }
        ]
    }
])

export default router;
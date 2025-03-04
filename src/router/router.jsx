import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signIn/SignIn";

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
            },
            {
                path : 'singIn',
                element : <SignIn/>
            }
        ]
    }
])

export default router;
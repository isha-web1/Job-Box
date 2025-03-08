import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PriveteRoute";
import JobApply from "../pages/jobApply/JobApply";

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
                path : '/job/:id',
                element : <PrivateRoute><JobDetails/></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path : 'jobApply/:id',
                element : <PrivateRoute><JobApply/></PrivateRoute>
            },
            {
                path : 'register',
                element : <Register/>
            },
            {
                path : 'signIn',
                element : <SignIn/>
            }
        ]
    }
])

export default router;
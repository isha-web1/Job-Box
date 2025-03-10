import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PriveteRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/myApplication/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/viewApplications/ViewApplications";

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
                path : 'myApplications',
                element : <PrivateRoute><MyApplications/></PrivateRoute>
            },
            {
                path : 'addJob',
                element : <PrivateRoute><AddJob/></PrivateRoute>
            },
            {
                path : 'myPostedJobs',
                element : <PrivateRoute><MyPostedJobs/></PrivateRoute>
            },
            {
                path: 'viewApplications/:job_id',
                element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`)
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
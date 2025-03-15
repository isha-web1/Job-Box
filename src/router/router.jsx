import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddJob from "../pages/AddJob/AddJob";
import Home from "../pages/home/Home";
import JobApply from "../pages/jobApply/JobApply";
import JobDetails from "../pages/jobDetails/JobDetails";
import MyApplications from "../pages/myApplication/MyApplications";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signIn/SignIn";
import ViewApplications from "../pages/viewApplications/ViewApplications";
import PrivateRoute from "./PriveteRoute";

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
                loader: ({ params }) => fetch(`https://job-box-server-xi.vercel.app/jobs/${params.id}`)
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
                loader: ({ params }) => fetch(`https://job-box-server-xi.vercel.app/job-applications/jobs/${params.job_id}`)
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
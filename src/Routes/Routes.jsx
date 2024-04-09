import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CardDetails from "../components/CardDetails";
import PrivateRouter from "./PrivateRouter";
import About from "../components/About";
import Contact from "../components/Contact";
import Profile from "../components/Profile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage> ,
        children:[
            {
                path:'/',
                loader: () =>fetch('/real-estate.json') ,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/details/:id',
                loader: () =>fetch('/real-estate.json') ,
                element:<PrivateRouter><CardDetails></CardDetails></PrivateRouter>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/profile',
                element:<PrivateRouter><Profile></Profile></PrivateRouter>
            }
            
        ]
    }
])

export default router
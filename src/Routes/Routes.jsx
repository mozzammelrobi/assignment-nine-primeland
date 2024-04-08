import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CardDetails from "../components/CardDetails";
import PrivateRouter from "./PrivateRouter";

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
            }
        ]
    }
])

export default router
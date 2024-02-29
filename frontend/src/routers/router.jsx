import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blogs from "../components/Blogs";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBook from "../dashboard/EditBook";
import Signup from "../contects/Signup";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Logout from "../components/Logout";
import Login from "../components/Login";
const router =createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },{
                path:"/about",
                element:<About/>
            },{
                path:"/blogs",
                element:<Blogs/>
            },{
                path:"/book/:id",
                element:<SingleBook/>,
                loader:({params})=>fetch(`http://localhost:4001/books/${params.id}`)
            }
        ]
    },
    {
        path:"/admin/dashboard",
        element:<DashboardLayout/> ,
        children:[
            {
                path:"/admin/dashboard",
                element:<PrivateRoute> <Dashboard/> </PrivateRoute>
            },
            {
                path:"/admin/dashboard/upload",
                element:<UploadBook/>
            },
            {
                path:"/admin/dashboard/manage",
                element:<ManageBooks/>
            },
            {
                path:"/admin/dashboard/edit-book/:id",
                element:<EditBook/>,
                loader:({params})=>fetch(`http://localhost:4001/books/${params.id}`)
            },{
                path:"sign-up",
                element:<Signup/>
            },{
                path:"login",
                element:<Login/>
            },{
                path:"logout",
                element:<Logout/>
            }
        ]
    }
]);

export default router;
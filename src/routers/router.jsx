import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./main.layout";
import Home from "../components/home";
import Attends from "../components/attends";
import Payment from "../components/payment";
import AddStudent from "../components/addStudent";
import Students from "../components/students";
import Data from "../components/data";
import Settings from "../components/settings";
import LastOperation from "../components/last-operation";
import AddGroup from "../components/addGroup";




const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'/attends',
                element:<Attends/>
            },
            {
                path:'/payment',
                element:<Payment/>
            },
            {
                path:'/add-student',
                element:<AddStudent/>
            },
            {
                path:'/students',
                element:<Students/>
            },
            {
                path:'/data',
                element:<Data/>
            },
            {
                path:'/settings',
                element:<Settings/>  
            },
            {
                path:'/last-operations',
                element:<LastOperation/>  
            },
            {
                path:'/add-group',
                element:<AddGroup/>  
            },
        ]
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./main.layout";
import Home from "../components/home";




const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home />
            }
        ]
    }
])

export default router;
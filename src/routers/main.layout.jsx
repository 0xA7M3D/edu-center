import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Nav from "../components/nav";

function MainLayout(){
    return(
        <div className="flex gap-3">
            <Nav/>
            <div className="flex flex-col">
                <Header/>
                <Outlet/>
            </div>
            
        </div>
    )
}

export default MainLayout;
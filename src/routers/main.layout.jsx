import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Nav from "../components/nav";

function MainLayout(){
    return(
        <div className="flex">
            <Nav/>
            <div className="flex flex-col w-full">
                <Header/>
                <div className="outlet p-7">
                    <Outlet/>
                </div>
            </div>
            
        </div>
    )
}

export default MainLayout;
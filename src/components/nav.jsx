import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png"
import { useEffect, useState } from "react";

function Nav(){

    const location = useLocation(null);
    const [active,setActive] = useState(false);
    // console.log(active);
    

    
    return(
        <div className={`nav ${active?"active-nav":"none-active"} z-20 bg-[#0b0f1c] sticky top-0 duration-300  flex-none h-[100vh]   flex w-[270px] flex-col gap-5 py-2 border-r border-gray-800`}>
            
            <div onClick={()=>{setActive(!active)}} className="btn-bar bg-gray-900 cursor-pointer absolute top-4.5 -right-[43px] rounded-l-none center-x-y border-l-0 border border-gray-800 p-2 px-3 rounded-lg">
                <i className="fa fa-bars text-xl"></i>
            </div>
            <div className="over p-3 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
            
                <div className="logo-big p-3 px-4">
                    {/* <img className="w-50" src={logo} alt="" /> */}
                    <p className="text-blue-600 text-3xl">Logo</p>
                </div>
                <div className="logo-small p-3 px-4">
                    {/* <img className="w-50" src={logo} alt="" /> */}
                    <h2 className="text-blue-600 text-3xl">L</h2>
                </div>
                <div className="links flex flex-col gap-1">
                    <Link to='/' className={`link link-normal ${location.pathname == "/"? "link-active":"" } `}>
                        <i className="fal fa-home "></i>
                        <p>Dashboard</p>
                    </Link>
                    <Link to='/attends' className={`link link-normal ${location.pathname == "/attends"? "link-active":"" }`}>
                        <i className="fal fa-user-check"></i>
                        <p>Attendance</p>
                    </Link>
                    <Link to='/payment' className={`link link-normal ${location.pathname == "/payment"? "link-active":"" }`}>
                        <i className="fal fa-money-bill-wave"></i>
                        <p>Payment</p>
                    </Link>
                    <Link to='/add-group' className={`link link-normal ${location.pathname == "/add-group"? "link-active":"" }`}>
                        <i className="fal fal fa-users-cog"></i>
                        <p>Add Group</p>
                    </Link>
                    <Link to='/add-student' className={`link link-normal ${location.pathname == "/add-student"? "link-active":"" }`}>
                        <i className="fal fa-user-plus"></i>
                        <p>Add Student</p>
                    </Link>
                    <Link to='/students' className={`link link-normal ${location.pathname == "/students"? "link-active":"" }`}>
                        <i className="fal fa-users"></i>
                        <p>Students</p>
                    </Link>
                    <Link to='/data' className={`link link-normal ${location.pathname == "/data"? "link-active":"" }`}>
                        <i className="fal fa-chart-pie"></i>
                        <p>Data</p>
                    </Link>
                    <Link to='/last-operations' className={`link link-normal ${location.pathname == "/last-operations"? "link-active":"" }`}>
                        <i className="fal fa-clock"></i>
                        <p>last operations</p>
                    </Link>
                    <Link to='/settings' className={`link link-normal ${location.pathname == "/settings"? "link-active":"" }`}>
                        <i className="fal fa-cog"></i>
                        <p> Settings </p>
                    </Link>
                    <Link to='/' className="link link-normal  bg-red-500/0 text-[#d6d6da] ">
                        <i className="fal fa-sign-out"></i>
                        <p>Log out</p>
                    </Link>
                </div>
                <div className="upgrade-dev flex-none bg-gray-900 p-3 py-4 border border-gray-800 rounded-lg">
                    <h3 className="text-gray-100 text-xl mb-2">Upgrade to Pro</h3>
                    <p className="py-1 text-gray-500 text-sm">Unlock all fetures and get more power your business </p>
                    <button className="bg-linear-to-r w-full mt-2 from-blue-600 to-violet-500 rounded-lg p-2 px-3 text-sm cursor-pointer">
                        Upgrade Now
                    </button>
                </div>
                <button className="btn-upgrade-only bg-linear-to-r w-full mt-2 from-blue-600 to-violet-500 rounded-lg p-2 px-3 text-sm cursor-pointer">
                    <i className="fas fa-shapes"></i>
                </button>
            </div>
    </div>
    )
}

export default Nav;

import { Link } from "react-router-dom";
import SvgIcon from "./svg-scan";
function NavOther() {
    return(
        <div className="nav_other  w-87 flex-none ">
            <div className="boxes-sticky sticky top-0  flex flex-col gap-5">
                <div className="box flex-col ">
                    <h1 className="text-xl">QR-Code Check in</h1>
                    <p className="text-sm text-gray-600">Scan student qr fro attendance or payment</p>
                    <SvgIcon/>
                    <Link className="contents" to="/attends">
                        <button className="bg-linear-to-r text-sm from-blue-600 to-violet-600 p-2 cursor-pointer rounded-lg mt-2">
                            <i className="fas fa-qrcode pr-2"></i>
                            Attendance
                        </button>
                    </Link>
                    <Link className="contents" to="/payment">
                        <button className="bg-linear-to-r text-sm from-green-500 to-green-900 p-2 cursor-pointer rounded-lg mt-2">
                            <i className="fas fa-qrcode pr-2"></i>
                            Payment
                        </button>
                    </Link>
                </div>


                <div className="box  flex flex-col gap-5">
                    <div className="head-box2 flex justify-between items-center">
                        <div className="">
                            <h1 className="text-xl">Last Operation</h1>
                            <p className="text-sm text-gray-600">last operation attendance/payment</p>
                        </div>
                        <Link className="contents" to='/last-operations'>
                            <button className="border border-gray-800 p-1 px-3 rounded-lg bg-gray-900 cursor-pointer">More</button>
                        </Link>
                    </div>
                    
                    <div className="users-list flex flex-col gap-2">

                        <div className="user-l flex gap-3 py-2 items-center border-b border-gray-800">
                            <i className="fas fa-dollar-sign oper-box-small-i-green"></i>
                            <div className="info-user">
                                <p className="text-md text-gray-300">Ahmed Elhady</p>
                                <p className="text-sm text-green-500">300 <i className="text-green-500/60">ج.م</i></p>
                            </div>
                            <p className="date text-xs text-gray-700 ml-auto">2 Munitus ago</p>
                        </div>
                        <div className="user-l flex gap-3 py-2 items-center border-b border-gray-800">
                            <i className="fas fa-qrcode oper-box-small-i-blue"></i>
                            <div className="info-user">
                                <p className="text-md text-gray-300">Muhammed Elhady</p>
                                <p className="text-sm text-blue-400">Attendance<i className="text-green-500/60"></i></p>
                            </div>
                            <p className="date text-xs text-gray-700 ml-auto">5 Munitus ago</p>
                        </div>



                    </div>


                </div>
            </div>



        </div>
    )
}

export default NavOther
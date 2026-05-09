
import qr_image from "../assets/images/qr-code-2.gif"
import SimpleAreaChart from "./charts/chart-1";
import PieChartWithPaddingAngle from "./charts/chart-2";
import SimpleBarChart from "./charts/chart-3";
import NavOther from "./nav-other";
import SvgIcon from "./svg-scan";
function Home(){
    return(
        <div className="home flex gap-4">
            <div className="hero_and_boxes">

                <div className="hero ">
                    <h1 className="h2a">Welcom back Ahmed 👋</h1>
                    <p className="pa">Here's what's happening at your education center today.</p>
                </div>

                <div className="boxes p-3 py-6 flex gap-5 flex-wrap justify-center">

                    <div className="box flex-col w-60">
                        <div className="icon-and-text flex items-center gap-4">
                            <i className="far fa-users p-3 py-3.5 text-lg bg-violet-600 rounded-xl shadow-[0_0_20px_#6229e762]"></i>
                            <div className="text-ic">
                                <p className="text-gray-400">Total Students</p>
                                <p className="text-2xl font-semibold">1,250</p>
                            </div>
                        </div>
                        <div className="chart self-start pt-3">
                            <p className="text-gray-600 text-start">All students u have</p>
                        </div>
                    </div>
                    <div className="box flex-col w-60">
                        <div className="icon-and-text flex items-center gap-4">
                            <i className="far fa-user-check p-3 py-3.5 text-lg bg-blue-600 rounded-xl shadow-[0_0_20px_#0ca3df6e]"></i>
                            <div className="text-ic">
                                <p className="text-gray-400">Total attendance</p>
                                <p className="text-2xl font-semibold">300</p>
                            </div>
                        </div>
                        <div className="chart self-start pt-3">
                            <p className="text-gray-600 text-start">Total attendance today</p>
                        </div>
                    </div>
                    <div className="box flex-col w-60">
                        <div className="icon-and-text flex items-center gap-4">
                            <i className="far fa-money-bill-wave p-3 py-3.5 text-lg bg-green-600 rounded-xl shadow-[0_0_20px_#0cdf526e]"></i>
                            <div className="text-ic">
                                <p className="text-gray-400">Total money</p>
                                <p className="text-2xl font-semibold">10,550</p>
                            </div>
                        </div>
                        <div className="chart self-start pt-3">
                            <p className="text-gray-600 text-start">Total money from students</p>
                        </div>
                    </div>
                    <div className="box flex-col w-60">
                        <div className="icon-and-text flex items-center gap-4">
                            <i className="far fa-chart-line-down p-3 py-3.5 text-lg bg-red-500 rounded-xl shadow-[0_0_20px_#ff393986]"></i>
                            <div className="text-ic">
                                <p className="text-gray-400">Total losses</p>
                                <p className="text-2xl font-semibold">50</p>
                            </div>
                        </div>
                        <div className="chart self-start pt-3">
                            <p className="text-gray-600 text-start">Losses from students</p>
                        </div>
                    </div>
                    <div className="box w-full flex-col gap-5">
                        <div className="hero-box">
                            <h3 className="text-2xl">Attendace Overview</h3>
                        </div>
                        <div className="flex">
                            <div className="chart">
                                <PieChartWithPaddingAngle/>
                            </div>

                            <div className="data-this mt-4 w-full flex flex-col gap-3">
                                <label className="flex w-full gap-3 items-center justify-between" htmlFor="">
                                    <div className="ttx flex items-center gap-3">
                                        <span className="w-4 flex-none h-4 flex rounded-sm bg-green-400"></span>
                                        <p> Students paid </p>
                                    </div>
                                    <p className="text-gray-400">400 <i className="fa fa-user text-gray-700"></i></p>
                                </label>
                                <label className="flex w-full gap-3 items-center justify-between" htmlFor="">
                                    <div className="ttx flex items-center gap-3">
                                        <span className="w-4 flex-none h-4 flex rounded-sm bg-yellow-400"></span>
                                        <p> Students no't paid </p>
                                    </div>
                                    <p className="text-gray-400">20 <i className="fa fa-user text-gray-700"></i></p>
                                </label>
                                <label className="flex w-full gap-3 items-center justify-between" htmlFor="">
                                    <div className="ttx flex items-center gap-3">
                                        <span className="w-4 flex-none h-4 flex rounded-sm bg-orange-400"></span>
                                        <p> Onther  </p>
                                    </div>
                                    <p className="text-gray-400">50 <i className="fa fa-user text-gray-700"></i></p>
                                </label>
                                <label className="flex w-full gap-3 items-center justify-between" htmlFor="">
                                    <div className="ttx flex items-center gap-3">
                                        <span className="w-4 flex-none h-4 flex rounded-sm bg-blue-400"></span>
                                        <p> Onther  </p>
                                    </div>
                                    <p className="text-gray-400">22 <i className="fa fa-user text-gray-700"></i></p>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* <div className="box">
                        <SimpleBarChart/>
                    </div>
                    <div className="box">
                        <SimpleAreaChart/>
                    </div> */}
                </div>

            </div>
            <NavOther/>
        </div>
    )
}

export default Home;
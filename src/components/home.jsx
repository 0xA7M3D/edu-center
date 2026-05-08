

function Home(){
    return(
        <div className="home">
            <div className="hero ">
                <h1 className="text-2xl pb-1">Welcom back Ahmed 👋</h1>
                <p className="text-sm text-gray-500">Here's what's happening at your education center today.</p>
            </div>

            <div className="boxes p-3 py-6 flex gap-5 flex-wrap">

                <div className="box  flex-col w-60">
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
                <div className="box  flex-col w-60">
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
                <div className="box  flex-col w-60">
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
                <div className="box  flex-col w-60">
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

            </div>
        </div>
    )
}

export default Home;
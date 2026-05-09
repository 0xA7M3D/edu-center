import PieChartWithPaddingAngle from "./charts/chart-2";
import SimpleBarChart from "./charts/chart-3";
import Chart_4 from "./charts/chart-4";
import PieChartWithCustomizedLabel from "./charts/chart-5";
import LineChartC6 from "./charts/chart-6";

function Data(){
    return(
        <div className="data-charts ">
            <div className="hero-stu">
                <h2 className="h2a">Data charts</h2>
                <p className="pa">All data you well found here</p>
            </div>

            <div className="boxes flex flex-wrap gap-4 items-start justify-center">
                <div className="box max-[770px]:w-full max-[770px]:justify-center  w-max mt-4">
                    <PieChartWithPaddingAngle/>
                </div>  
                <div className="box max-[770px]:w-full max-[770px]:justify-center  w-max mt-4">
                    <SimpleBarChart/>
                </div>  
                <div className="box max-[770px]:w-full max-[770px]:justify-center  w-max mt-4">
                    <PieChartWithCustomizedLabel/>
                </div>  
                <div className="box max-[770px]:w-full max-[770px]:justify-center  w-max mt-4">
                    <Chart_4 />
                </div>  
                <div className="box max-[770px]:w-full max-[770px]:justify-center  w-max mt-4">
                    <LineChartC6 />
                </div>  
            </div>
        </div>
    )
}

export default Data;
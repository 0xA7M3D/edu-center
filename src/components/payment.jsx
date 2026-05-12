import SvgIcon from "./svg-scan-2";
import img from '../assets/images/image.png'
import { useState } from "react";


function Payment(){

    const [done , setDone] = useState(false);

    const [data,setData] =
        useState({
            id:1,
        })
    
        function submit() {
    
            fetch("http://localhost:3000/payment",{
                method:"post",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
                
            })
            .then(res => res.json())
            .then(da => {
                console.log(da)
                setDone(true)
            })
            .catch(error => {
                console.log("Error Payment: ",error)
                setDone(false)
            })
        }




    return(
        <div className="payment content-page">
                <div className="hero-here">
                    <h1 className="h2a">Payment this month</h1>
                    <p className="pa">git money fro this month from student</p>
                </div>
                <div className="box mt-4 justify-center items-center gap-3">
                    <div className="flex flex-col gap-3">
                        <div className="img w-70">
                            <SvgIcon />
                        </div>
                        <input onChange={(e)=>{setData({...data,id:e.target.value})}} value={data.id} className="border border-gray-800/70 rounded-lg text-xl p-1 px-3 text-center" type="text" />
                        <button onClick={submit} className="bg-linear-to-r h-max text-lg from-blue-600 to-violet-600 p-2 cursor-pointer rounded-lg mt-2">
                            <i className="fas fa-qrcode pr-2"></i>
                            Start Scanner
                        </button>
                    </div>
                    <hr className="hr-y h-30 bg-gray-800 mx-10" />
                    
                    <h1 className={`text-2xl ${!done ? "active":"hidden"} text-gray-700 text-center max-w-100`}>Scan First For payment and show info student</h1>
                    <div className={`info-student ${done ? "active":""}  flex flex-col items-center`}>
                        <div className="img-prof">
                            <img className="w-20 h-20 rounded-full mb-4" src={img} alt="" />
                        </div>
                        <p className="text-2xl">Ahmed Elhady</p>
                        <p className="text-gray-700">Level / <span className="text-gray-600">1</span></p>
                        {/* <p className="text-md text-gray-100 bg-green-400/10 border border-green-400/20 rounded-xl p-1 px-3">Done attendance</p> */}
                        <div className="svg mt-3">
                            <i className="far fa-check-circle text-3xl text-green-600/50"></i>
                        </div>
                        <p className="text-green-400/70 text-sm">Done payment</p>
                    </div>

                 
                </div>
        </div>
    )
}

export default Payment;
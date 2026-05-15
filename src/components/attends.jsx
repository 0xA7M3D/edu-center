import SvgIcon from "./svg-scan";
import img from '../assets/images/image.png'
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> 0cd0c47e27e904945cfaf55729d92c52fb410135

function Attends(){

    const [done , setDone] = useState(false);
<<<<<<< HEAD
    const [notifcat_wrong,setNotifcat_wrong] = useState(false);

    const [user,setUser] = useState([])
    const [userId,setUserId] = useState(0)
    useEffect(()=>{
        console.log(user)
    },[user])

    function submit() {

        fetch(`http://localhost:3000/attendanse/${userId}`,{
            method:"get",
        })
        .then(res => res.json())
        .then(da => {
            setUser(da)
            setDone(true)
            setTimeout(() => {
                setDone(false)
            }, 3000);
            setNotifcat_wrong(false)
        })
        .catch(error => {
            console.log("Error Payment: ",error)
            setDone(false)
            setNotifcat_wrong(true)
        })
=======


    const [data,setData] =
    useState({
        id:1,
    })

    function submit() {

        fetch("http://localhost:3000/attendanse",{
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
            console.log("Error Attends: ",error)
            setDone(false)
        })
        
>>>>>>> 0cd0c47e27e904945cfaf55729d92c52fb410135
    }



    return(
        <div className="attendance content-page">
                <div className="hero-here">
                    <h1 className="h2a">Sign Attendance</h1>
                    <p className="pa">Attendance students</p>
                </div>
<<<<<<< HEAD

                <div className={`notifcat ${notifcat_wrong?"active":''} ntifcat-succ border border-red-400/30 w-full rounded-lg p-5 py-3 translate-y-3 bg-red-400/15 flex justify-between items-center`}>
                    <div className="t flex gap-3 items-center">
                        <i className="fa fa-bug text-2xl text-red-800"></i>
                        <h3 className="text-red-500">There some Error</h3>
                    </div>
                    <i onClick={ ()=>{setNotifcat_wrong(false)}} className="fas fa-close p-2 px-3 text-sm rounded-full bg-amber-50/10 cursor-pointer hover:bg-amber-50/20"></i>
                </div>
                
=======
>>>>>>> 0cd0c47e27e904945cfaf55729d92c52fb410135
                <div className="box mt-4 justify-center items-center gap-3">
                    <div className="flex flex-col gap-3">
                        <div className="img w-70">
                            <SvgIcon />
                        </div>
<<<<<<< HEAD
                        <input onChange={(e)=>{setUserId(e.target.value)}} value={userId} className="border border-gray-800/70 rounded-lg text-xl p-1 px-3 text-center" type="text" />
=======
                        <input onChange={(e)=>{setData({...data,id:e.target.value})}} value={data.id} className="border border-gray-800/70 rounded-lg text-xl p-1 px-3 text-center" type="text" />
>>>>>>> 0cd0c47e27e904945cfaf55729d92c52fb410135
                        <button onClick={submit} className="bg-linear-to-r h-max text-lg from-blue-600 to-violet-600 p-2 cursor-pointer rounded-lg mt-2">
                            <i className="fas fa-qrcode pr-2"></i>
                            Start Scanner
                        </button>
                    </div>
                    <hr className="hr-y h-30 bg-gray-800 mx-10" />
                    
<<<<<<< HEAD
                    <h1 className={`no-found text-2xl ${!done ? "active":""} text-gray-700 text-center max-w-100`}>Scan First For sign attendance and show info student</h1>
=======
                    <h1 className={`text-2xl ${!done ? "active":"hidden"} text-gray-700 text-center max-w-100`}>Scan First For sign attendance and show info student</h1>
>>>>>>> 0cd0c47e27e904945cfaf55729d92c52fb410135
                    <div className={`info-student ${done ? "active":""}  flex flex-col items-center`}>
                        <div className="img-prof">
                            <img className="w-20 h-20 rounded-full mb-4" src={img} alt="" />
                        </div>
<<<<<<< HEAD
                        <p className="text-2xl">{user[0]?.name}</p>
                        <p className="text-gray-700">Level / <span className="text-gray-600">{user[0]?.level}</span></p>
                        {/* <p className="text-md text-gray-100 bg-green-400/10 border border-green-400/20 rounded-xl p-1 px-3">Done attendance</p> */}
                        <div className="svg mt-3">
                            {
                                user[0]?.name?
                                <div className="flex flex-col items-center">
                                    <i className="far fa-check-circle text-3xl text-green-600/50"></i>
                                    <p className="text-green-400/70 text-sm">Done Attendance</p>
                                </div>
                                
                                :
                                <div className="flex flex-col items-center">
                                    <i className="far fa-bug text-3xl text-red-600/50"></i>
                                    <p className="text-red-400/70 text-sm">User not found</p>
                                </div>
                            }
                        </div>
=======
                        <p className="text-2xl">Ahmed Elhady</p>
                        <p className="text-gray-700">Level / <span className="text-gray-600">1</span></p>
                        {/* <p className="text-md text-gray-100 bg-green-400/10 border border-green-400/20 rounded-xl p-1 px-3">Done attendance</p> */}
                        <div className="svg mt-3">
                            <i className="far fa-check-circle text-3xl text-green-600/50"></i>
                        </div>
                        <p className="text-green-400/70 text-sm">Done attendance</p>
>>>>>>> 0cd0c47e27e904945cfaf55729d92c52fb410135
                    </div>
                </div>
        </div>
    )
}

export default Attends;
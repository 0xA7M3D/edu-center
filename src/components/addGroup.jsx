import { useState } from "react"
import success from "../assets/images/success.png";
import wrong from "../assets/images/wrong.png";
function AddGroup(){

    const [popupSu,openPopupSu] = useState(false);
    const [popupWr,openPopupWr] = useState(false);
    
    const [data,setData] =
    useState({
        id:0,
        name:'',
        location:'',
        priceMonth:'',
        startDate:'',
        endDate:'',
    })

    function submit() {

        fetch("http://localhost:3000/addGroup",{
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
            
        })
        .then(res => res.json())
              .then(da => {
            console.log(da)
            openPopupSu(true);
            openPopupWr(false);
        })
        .catch(error =>{
            console.log("Error creat group: " , error);
            openPopupWr(true);
            openPopupSu(false);
            
        })
    }



    return(
        <div className="add-group content-page">            
            <div onClick={()=>{openPopupSu(false); openPopupWr(false)}} className={`back-popup ${popupSu||popupWr ? 'active':''} z-30 fixed w-full h-full top-0 left-0 bg-gray-900/50 backdrop-blur-xs`}></div>
            
            <div className={`box popup ${popupSu ? 'active':''} absolute z-40 -translate-1/2 top-1/2 left-1/2 !bg-gray-900 popup-add-student w-100 gap-5 flex flex-col items-center`}>
                <div className="icon-status h-17 -translate-y-22">
                    <img className="w-40 animate-pulse" src={success} alt="" />
                </div>

                <div className="content-pop">
                    <h2 className="text-2xl text-gray-200 text-center">Done creat group!</h2>
                    <p className="text-sm text-gray-600">now done added group successfuly</p>
                </div>
                <button onClick={()=>{openPopupSu(false)}} className="p-2 px-4 w-full bg-linear-to-l from-green-500 to-lime-700 cursor-pointer rounded-lg h-max"> Done </button>
            </div>
            <div className={`box popup ${popupWr ? 'active':''} absolute z-40 -translate-1/2 top-1/2 left-1/2 !bg-gray-900 popup-add-student w-100 gap-5 flex flex-col items-center`}>
                <div className="icon-status h-17 -translate-y-22">
                    <img className="w-40 animate-pulse" src={wrong} alt="" />
                </div>


                <div className="content-pop">
                    <h2 className="text-2xl text-gray-200 text-center">Founded Error !!</h2>
                    <p className="text-sm text-gray-600">Fix this error , if u need help i'm here</p>
                </div>
                <button onClick={()=>{openPopupWr(false)}} className="p-2 px-4 w-full bg-linear-to-r from-red-500 to-orange-600 cursor-pointer rounded-lg h-max"> fix it </button>
            </div>

             <div className="hero-stu">
                <h2 className="h2a">Add group</h2>
                <p className="pa">Add new group</p>
            </div>

              <div className="box mt-4  flex flex-col gap-5">
                <div className="hero-stu flex justify-between items-center">
                    <h2 className="h2a text-gray-400">Group information</h2>
                    <i className="fa fa-users-cog text-gray-700 text-2xl px-2"></i>
                </div>

                <div className="inputs flex flex-col gap-4">
                    <div className="inputs-2 flex gap-7 w-full">
                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">Enter Name Group</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fa fa-users  px-2 pl-4 text-gray-700"></i>
                                <input onChange={(e)=>{setData({...data,name:e.target.value})}} value={data.name} className="w-full p-3 outline-none" type="text" placeholder="Name group"/>
                            </div>
                        </label>

                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">Location</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fas fa-location-arrow  px-2 pl-4 text-gray-700"></i>
                                <input onChange={(e)=>{setData({...data,location:e.target.value})}} value={data.location} className="w-full p-3 outline-none" type="text" placeholder="Address location"/>
                            </div>
                        </label>
                    </div>
                
                    <div className="inputs-2 flex gap-7 w-full">
                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">price</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fa fa-dollar-sign  px-2 pl-4 text-gray-700"></i>
                                <input onChange={(e)=>{setData({...data,priceMonth:e.target.value})}} value={data.startDate} className="w-full p-3 outline-none" type="number" placeholder="The price in month"/>
                            </div>
                        </label>
                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">Start in</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fa fa-calendar-check  px-2 pl-4 text-gray-700"></i>
                                <input onChange={(e)=>{setData({...data,startDate:e.target.value})}} value={data.startDate} className="w-full p-3 outline-none" type="date"/>
                            </div>
                        </label>

                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">End in</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fas fa-calendar-times  px-2 pl-4 text-gray-700"></i>
                                <input onChange={(e)=>{setData({...data,endDate:e.target.value})}} value={data.endDate} className="w-full p-3 outline-none" type="date"/>
                            </div>
                        </label>
                    </div>
                
                    <button onClick={submit} className="bg-linear-to-l mt-5 from-blue-600 to-violet-600 p-2 rounded-lg cursor-pointer">
                        <i className="fa fa-plus pr-2"></i>
                        Add new group
                    </button>


                </div>
              </div>
                
        </div>
    )
}

export default AddGroup;
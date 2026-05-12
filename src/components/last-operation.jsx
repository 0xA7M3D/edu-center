import { useState } from "react";
import delete_png from "../assets/images/delete.png";

function LastOperation(){

    const [idUser , setIdUser] = useState()
    const [popupDel,openPopupDel] = useState(false);

    const [operations , setOperations] = useState([
           
        {
            id:1,
            type:'attendance',
            name:'Ahmed Elhady',
            doneIn:"12/5/2026",
            stuId:'4442234',
            status:'Error',
            codeOperation:'sa2-1sd2',
            num:'011-3355-325',
        },
        {
            id:1,
            type:'attendance',
            name:'Muhammed Elhady',
            doneIn:"12/5/2026",
            stuId:'4442234',
            status:'Done',
            codeOperation:'sa2-1sd2',
            num:'011-3355-325',
        },
    ]
       )
    
       

    return(
        <div className="last-operation content-page">

            <div onClick={()=>{openPopupDel(false)}} className={`back-popup ${popupDel ? 'active':''} z-30 fixed w-full h-full top-0 left-0 bg-gray-900/50 backdrop-blur-xs`}></div>
            <div className={`box popup ${popupDel ? 'active':''} absolute z-40 -translate-1/2 top-1/2 left-1/2 !bg-gray-900 popup-add-student w-100 gap-7 flex flex-col items-center`}>
                <div className="icon-status h-17 -translate-y-22">
                    <img className="w-40 animate-pulse" src={delete_png} alt="" />
                </div>


                <div className="content-pop">
                    <h2 className="text-3xl text-gray-200 text-center">Are You sure about deleteing! </h2>
                    <p className="text-md text-gray-600 text-center">This student will be permanently removed</p>
                </div>
                <button onClick={()=>{openPopupDel(false)}} className="p-2 px-4 w-full bg-linear-to-r from-red-500 to-orange-600 cursor-pointer rounded-lg h-max">  Remove </button>
            </div>


            <div className="hero-stu">
                <h2 className="h2a">All last operation</h2>
                <p className="pa">Last operation happenend</p>
            </div>

            <div className="box mt-4 flex flex-col gap-5">
                <div className="header-box flex justify-between w-full">
                    <div className="inp w-70 flex items-center inp-s">
                        <i className="fa fa-search p-2 pl-4 text-gray-600"></i>
                        <input className="p-2 outline-none px-3" type="text" placeholder="Search last operation.."/>
                    </div>
                    <div className="r">
                        <div className="inp pr-2 flex items-center inp-s">
                            <select className="p-3 outline-none" name="" id="">
                                <option value="all">All operation</option>
                                <option value="new">new</option>
                                <option value="old">old </option>
                            </select>
                        </div>

                    </div>
                </div>

                <div className="table">
                    <table className="w-full ">
                        <thead className="">
                            <tr >
                                <th className="th-s">#</th>
                                <th className="th-s">type</th>
                                <th className="th-s">name</th>
                                <th className="th-s">Done in</th>
                                <th className="th-s">Status</th>
                                <th className="th-s">Code</th>
                                <th className="th-s">Id Student</th>
                                <th className="th-s">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                operations.map(op =>(
                                <tr>
                                    <td className="td-s">{op.id}</td>
                                    <td className="td-s">{op.type}</td>
                                    <td className="td-s">{op.name}</td>
                                    <td className="td-s">{op.doneIn}</td>
                                    <td className="td-s ">
                                        {
                                            op.status == "Done" ?
                                            <p className="p-2 px-4 rounded-lg bg-green-500/10 text-green-400/80 w-max">Done</p>
                                            :
                                            <p className="p-2 px-4 rounded-lg bg-red-400/10 text-red-400/80 w-max">Error</p>

                                        }
                                    </td>
                                    <td className="td-s">{op.codeOperation}</td>
                                    <td className="td-s">{op.stuId}</td>
                                    <td className="td-s">
                                        <div className="actions flex gap-2 ">
                                            <button 
                                                onClick={()=>{
                                                    setIdUser(op.id)
                                                    openPopupDel(true)
                                                }}
                                                
                                                className="p-2 hover:bg-red-500/30 px-3 rounded-lg text-lg bg-red-400/20 cursor-pointer ">
                                                    <i className="far fa-trash text-red-500"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LastOperation;
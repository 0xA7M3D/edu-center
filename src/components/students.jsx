import { useEffect, useRef, useState } from "react";
import success from "../assets/images/success.png";
import wrong from "../assets/images/wrong.png";
import edite_png from "../assets/images/edite-2.png";
import delete_png from "../assets/images/trash.png";



function Students(){
    
    const [idUser , setIdUser] = useState()
    const [notifcat_succ,setNotifcat_succ] = useState(false);
    const [notifcat_wrong,setNotifcat_wrong] = useState(false);

    const [popupEd,openPopupEd] = useState(false);
    const [popupDel,openPopupDel] = useState(false);
    const [popupDelGr,openPopupDelGr] = useState(false);
    const [idGroup,setidGroup] = useState(null);
   // -----  Post  ----- 
    const [data,setData] = useState([])

       // -----  Get  ----- 

   const [users , setUsers] = useState([
    // {
    //     id:1,
    //     name:'Ahmed Elhady',
    //     stuId:'4442234',
    //     level:'threed',
    //     gender:'male',
    //     num:'011-3355-325',
    //     location:'Cairo',
    //     addedIn:'12/5/2026'
    // },
    // {
    //     id:2,
    //     name:'Muhammed Elhady',
    //     stuId:'876854',
    //     level:'first',
    //     gender:'male',
    //     num:'011-3355-325',
    //     location:'Algeria',
    //     addedIn:'11/5/2026'
    // },
    // {
    //     id:3,
    //     name:'Omar Elhady',
    //     stuId:'123551',
    //     level:'second',
    //     gender:'male',
    //     num:'011-3355-325',
    //     location:'Moroco',
    //     addedIn:'10/5/2026'
    // }
]
   )
   const [groups , setGroups] = useState([
    {
        id:1,
        name:'Group 1',
        location:'Roudah',
        priceMonth:'200',
        startDate:'12/4/2026',
        endDate:'12/6/2026',
    },
    {
        id:2,
        name:'Group 2',
        location:'Hesamiah',
        priceMonth:'250',
        startDate:'12/2/2026',
        endDate:'12/6/2026',
    },
    {
        id:3,
        name:'Group 3',
        location:'Gaafrah',
        priceMonth:'300',
        startDate:'12/1/2026',
        endDate:'12/7/2026',
    },
]
   )


    const [infoUser, setinfoUser] = useState(
        {
            id:1,
            name:'',
            stuId:'',
            level:'',
            gender:'',
            num:'',
            location:'',
            addedIn:''
        }
       )

       useEffect(()=>{
            console.log(infoUser);
       },[infoUser])

    const reftop = useRef();
    const scrolBody = ()=>{
        reftop.current.scrollIntoView({behavior:'smooth'})
    }

    function get_students() {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(data => { setUsers(data) ;console.log(data)})
            .catch(err => console.log("Error Get Users:", err))
    }

    useEffect(()=>{
        get_students()
    },[])

    function edite_sub() {

        fetch("http://localhost:3000/editeUser",{
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(infoUser)
            
        })
        .then(res => res.json())
        .then(da => {
            console.log(da)
            setNotifcat_succ(true);
            setNotifcat_wrong(false);
            get_students();
        })
        .catch(error =>{
            console.log("Error Edite info user: " , error);
            setNotifcat_wrong(true);
            setNotifcat_succ(false);
        })
    }
    function deleteUser() {

        fetch(`http://localhost:3000/deleteUser/${idUser}`)
        .then(res => res.text())
        .then(da => {
            console.log(da)
            setNotifcat_succ(true);
            setNotifcat_wrong(false);
            get_students()
        })
        .catch(error =>{
            console.log("Error delete User: " , error);
            setNotifcat_wrong(true);
            setNotifcat_succ(false);
      
        })
    }

    function get_groups(){
        fetch("http://localhost:3000/groups")
        .then(res => res.json())
        .then(data=> setGroups(data))
        .catch(err => console.log("Error Get Groups: ",err))
    }
    get_groups()

    function deleteGroup() {

        fetch(`http://localhost:3000/deleteGroup/${idGroup}`)
        .then(res => res.json())
        .then(da => {
            console.log(da)
            setNotifcat_succ(true);
            setNotifcat_wrong(false);
            
        })
        .catch(error =>{
            console.log("Error delete Group: " , error);
            setNotifcat_wrong(true);
            setNotifcat_succ(false);
      
        })
    }
  
       












    return(

        
        <div ref={reftop} className="students content-page">


            <div onClick={()=>{openPopupEd(false); openPopupDel(false); openPopupDelGr(false) }} className={`back-popup ${popupEd||popupDel || popupDelGr ? 'active':''} z-30 fixed w-full h-full top-0 left-0 bg-gray-900/50 backdrop-blur-xs`}></div>
            
            <div className={`box popup ${popupEd ? 'active':''} absolute z-40 -translate-1/2 top-1/2 left-1/2 !bg-gray-900 popup-add-student w-100 gap-5 flex flex-col items-center`}>
                <div className="icon-status h-5 -translate-y-20">
                    <img className="w-25 animate-pulse" src={edite_png} alt="" />
                </div>

                <div className="content-pop">
                    <h2 className="text-2xl text-gray-200 text-center">Edite Info Student</h2>
                    <p className="text-sm text-gray-600">Update all info fro student</p>
                </div>

                <div className="inputs-edite w-full flex flex-col gap-2">

                    <div className="label flex flex-col gap-1">
                        <p className="text-sm text-gray-400">Student Name</p>
                        <div className="inp flex items-center rounded-sm border border-gray-800">
                            <i className="fa fa-user p-1 pl-3 text-gray-600"></i>
                            <input onChange={(e)=>{setinfoUser({...infoUser,name:e.target.value})}} className="p-1 px-3 outline-none w-full " type="text" value={infoUser.name}/>
                        </div>
                    </div>
                    <div className="label flex flex-col gap-1">
                        <p className="text-sm text-gray-400">Number Phone</p>
                        <div className="inp flex items-center rounded-sm border border-gray-800">
                            <i className="fa fa-phone p-1 pl-3 text-gray-600"></i>
                            <input onChange={(e)=>{setinfoUser({...infoUser,num:e.target.value})}} className="p-1 px-3 outline-none w-full " type="text" value={infoUser.num}/>
                        </div>
                    </div>
                    <div className="label flex flex-col gap-1">
                        <p className="text-sm text-gray-400">Location</p>
                        <div className="inp flex items-center rounded-sm border border-gray-800">
                            <i className="fas fa-location-arrow p-1 pl-3 text-gray-600"></i>
                            <input onChange={(e)=>{setinfoUser({...infoUser,location:e.target.value})}} className="p-1 px-3 outline-none w-full " type="text" value={infoUser.location}/>
                        </div>
                    </div>
                    <div className="label flex flex-col gap-1">
                        <p className="text-sm text-gray-400">Level</p>
                        <div className="inp flex items-center rounded-sm border border-gray-800">
                            <i className="fa fa-arrow-up p-1 pl-3 text-gray-600"></i>
                            <select onChange={(e)=>{setinfoUser({...infoUser,level:e.target.value})}} className="p-2 px-3 outline-none w-full" name="" id="" value={infoUser.level}>
                                <option value="first">First</option>
                                <option value="second">Second</option>
                                <option value="threed">Threed</option>
                            </select>
                        </div>
                    </div>
        

                </div>
                <button onClick={()=>{openPopupEd(false); edite_sub()}} className="p-2 px-4 w-full bg-linear-to-l from-green-500 to-lime-700 cursor-pointer rounded-lg h-max"> Update </button>
            </div>

            <div className={`box popup ${popupDel ? 'active':''} absolute z-40 -translate-1/2 top-1/2 left-1/2 !bg-gray-900 popup-add-student w-100 gap-7 flex flex-col items-center`}>
                <div className="icon-status h-17 -translate-y-22">
                    <img className="w-40 animate-pulse" src={delete_png} alt="" />
                </div>


                <div className="content-pop">
                    <h2 className="text-3xl text-gray-200 text-center">Are You sure about deleteing! </h2>
                    <p className="text-md text-gray-600 text-center">This student will be permanently removed</p>
                </div>
                <button onClick={()=>{openPopupDel(false);deleteUser(); scrolBody}} className="p-2 px-4 w-full bg-linear-to-r from-pink-800 to-pink-950 cursor-pointer rounded-lg h-max">  Remove </button>
            </div>
            <div className={`box popup ${popupDelGr ? 'active':''} fixed z-40 -translate-1/2 top-1/2 left-1/2 !bg-gray-900 popup-add-student w-100 gap-7 flex flex-col items-center`}>
                <div className="icon-status h-17 -translate-y-22">
                    <img className="w-40 animate-pulse" src={delete_png} alt="" />
                </div>


                <div className="content-pop">
                    <h2 className="text-3xl text-gray-200 text-center">Are You sure about deleteing! </h2>
                    <p className="text-md text-gray-600 text-center">This group will be permanently removed</p>
                </div>
                <button onClick={()=>{openPopupDelGr(false);deleteGroup(); }} className="p-2 px-4 w-full bg-linear-to-r from-pink-800 to-pink-950 cursor-pointer rounded-lg h-max">  Remove </button>
            </div>

           



            <div className="hero-stu">
                <h2 className="h2a">All Students</h2>
                <p className="pa">Students you have in center</p>
            </div>

            <div className={`notifcat ${notifcat_succ?"active":''} ntifcat-succ border border-green-600/30 w-full rounded-lg p-5 py-3 translate-y-3 bg-green-400/15 flex justify-between items-center`}>
                <div className="t flex gap-3 items-center">
                    <i className="fa fa-check-circle text-2xl text-green-800"></i>
                    <h3 className="text-green-500"> Everything is fine </h3>
                </div>
                <i onClick={()=>{setNotifcat_succ(false)}} className="fas fa-close p-2 px-3 text-sm rounded-full bg-amber-50/10 cursor-pointer hover:bg-amber-50/20"></i>
            </div>
            <div className={`notifcat ${notifcat_wrong?"active":''} ntifcat-succ border border-red-400/30 w-full rounded-lg p-5 py-3 translate-y-3 bg-red-400/15 flex justify-between items-center`}>
                <div className="t flex gap-3 items-center">
                    <i className="fa fa-bug text-2xl text-red-800"></i>
                    <h3 className="text-red-500">There some Error</h3>
                </div>
                <i onClick={ ()=>{setNotifcat_wrong(false)}} className="fas fa-close p-2 px-3 text-sm rounded-full bg-amber-50/10 cursor-pointer hover:bg-amber-50/20"></i>
            </div>

            <div className="box mt-4 flex flex-col gap-5">
                <div className="header-box flex justify-between w-full">
                    <div className="inp w-70 flex items-center inp-s">
                        <i className="fa fa-search p-2 pl-4 text-gray-600"></i>
                        <input className="p-2 outline-none px-3" type="text" placeholder="Search students.."/>
                    </div>
                    <div className="r">
                        <div className="inp pr-2 flex items-center inp-s">
                            <select className="p-3 outline-none" name="" id="">
                                <option value="all">All Students</option>
                                <option value="all">First </option>
                                <option value="all">Seconde</option>
                                <option value="all">Threed</option>
                            </select>
                        </div>

                    </div>
                </div>

                <div className="table">
                    <table className="w-full ">
                        <thead className="">
                            <tr >
                                <th className="th-s">#</th>
                                <th className="th-s">Student</th>
                                <th className="th-s">Level</th>
                                <th className="th-s">Added in</th>
                                <th className="th-s">Status</th>
                                <th className="th-s">Number Student</th>
                                <th className="th-s">Number Parent</th>
                                <th className="th-s">Code</th>
                                <th className="th-s">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user,id)=>(
                                    <tr key={id}>
                                        <td className="td-s">{user.id}</td>
                                        <td className="td-s">{user.name}</td>
                                        <td className="td-s">{user.level}</td>
                                        <td className="td-s">{user.add_in}</td>
                                        <td className="td-s ">
                                            <p className="p-2 px-4 rounded-lg bg-green-500/10 text-green-400/80 w-max">Paid</p>
                                        </td>
                                        <td className="td-s">{user.numStudent}</td>
                                        <td className="td-s">{user.numParent}</td>
                                        <td className="td-s">{user.stuId}</td>
                                        <td className="td-s">
                                            <div className="actions flex gap-2 ">
                                                <button 
                                                onClick={()=>{
                                                    setinfoUser({...infoUser,
                                                        id:user.id,
                                                        name:user.name,
                                                        level:user.level,
                                                        addedIn:user.addedIn,
                                                        num:user.numStudent,
                                                        location:user.location,
                                                        stuId:user.stuId,
                                                    });
                                                    openPopupEd(true)
                                                    
                                                }} className="p-2 hover:bg-gray-600/40 px-3 rounded-lg text-lg bg-gray-600/20 cursor-pointer ">
                                                    
                                                    <i className="far fa-pen text-gray-200"></i>
                                                </button>
                                                <button 
                                                onClick={()=>{
                                                    setIdUser(user.id)
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



            <div className="hero-stu mt-5">
                <h2 className="h2a">All Groups</h2>
                <p className="pa">All Groups you have here</p>
            </div>
            <div className="box mt-4">
                <table className="w-full">
                    <thead className="">
                        <tr >
                            <th className="th-s">#</th>
                            <th className="th-s">Name Group</th>
                            <th className="th-s">Location</th>
                            <th className="th-s">Price</th>
                            <th className="th-s">Start In</th>
                            <th className="th-s">End In</th>
                            <th className="th-s">Action</th>
                        </tr>
                    </thead>

                    <tbody >
                        {
                            groups.map((group,id)=> (
                                <tr key={id}>
                                    <td className="td-s">{group.id}</td>
                                    <td className="td-s">{group.name}</td>
                                    <td className="td-s">{group.location}</td>
                                    <td className="td-s">{group.priceMonth}</td>
                                    <td className="td-s">{group.startDate}</td>
                                    <td className="td-s">{group.endDate}</td>
                                    <td className="td-s">
                                        <button 
                                            onClick={()=>{
                                                setidGroup(group.id)
                                                openPopupDelGr(true)
                                            }}
                                            
                                            className="p-2 hover:bg-red-500/30 px-3 rounded-lg text-lg bg-red-400/20 cursor-pointer ">
                                                <i className="far fa-trash text-red-500"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Students;
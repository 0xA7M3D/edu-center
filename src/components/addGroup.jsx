function AddGroup(){
    return(
        <div className="add-group">
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
                                <input className="w-full p-3 outline-none" type="text" placeholder="Name group"/>
                            </div>
                        </label>

                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">Location</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fas fa-location-arrow  px-2 pl-4 text-gray-700"></i>
                                <input className="w-full p-3 outline-none" type="text" placeholder="Address location"/>
                            </div>
                        </label>
                    </div>
                
                    <div className="inputs-2 flex gap-7 w-full">
                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">Start in</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fa fa-calendar-check  px-2 pl-4 text-gray-700"></i>
                                <input className="w-full p-3 outline-none" type="date"/>
                            </div>
                        </label>

                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">End in</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fas fa-calendar-times  px-2 pl-4 text-gray-700"></i>
                                <input className="w-full p-3 outline-none" type="date"/>
                            </div>
                        </label>
                    </div>
                
                    <button className="bg-linear-to-l mt-5 from-blue-600 to-violet-600 p-2 rounded-lg cursor-pointer">
                        <i className="fa fa-plus pr-2"></i>
                        Add new group
                    </button>


                </div>
              </div>
                
        </div>
    )
}

export default AddGroup;
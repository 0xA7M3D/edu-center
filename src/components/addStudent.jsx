function AddStudent(){
    return(
        <div className="add-student">
             <div className="hero-stu">
                <h2 className="h2a">Add Student</h2>
                <p className="pa">Add new student</p>
            </div>

              <div className="box mt-4  flex flex-col gap-5">
                <div className="hero-stu flex justify-between items-center">
                    <h2 className="h2a text-gray-400">Personal information</h2>
                    <i className="fa fa-user-plus text-gray-700 text-2xl px-2"></i>
                </div>

                <div className="inputs flex flex-col gap-4">
                    <div className="inputs-2 flex gap-7 w-full">
                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">Enter Name</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fa fa-user  px-2 pl-4 text-gray-700"></i>
                                <input className="w-full p-3 outline-none" type="text" placeholder="Name student"/>
                            </div>
                        </label>
                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">Student id</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fa fa-barcode-read  px-2 pl-4 text-gray-700"></i>
                                <input className="w-full p-3 outline-none" type="text" placeholder="Code student"/>
                            </div>
                        </label>

                    </div>

                    <div className="inputs-2 flex gap-7 w-full">
                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">Birthday</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fa fa-birthday-cake  px-2 pl-4 text-gray-700"></i>
                                <input className="w-full p-3 outline-none" type="date" placeholder="birth date"/>
                            </div>
                        </label>
                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">Gender</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fa fa-mars  px-2 pl-4 text-gray-700"></i>
                                <select className="w-full p-3 outline-none" name="" id="">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </label>
                    </div>

                    <div className="inputs-2 flex gap-7 w-full">
                        <label className="flex flex-col gap-1 w-full" htmlFor="">
                            <p className="text-gray-300">Number phone</p>
                            <div className="inp flex items-center inp-s w-full">
                                <i className="fa fa-phone  px-2 pl-4 text-gray-700"></i>
                                <input className="w-full p-3 outline-none" type="text" placeholder="Phone number"/>
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

                    <button className="bg-linear-to-l mt-5 from-blue-600 to-violet-600 p-2 rounded-lg cursor-pointer">
                        <i className="fa fa-user-plus pr-2"></i>
                        Add User
                    </button>


                </div>
              </div>
                
        </div>
    )
}

export default AddStudent;
function LastOperation(){
    return(
        <div className="last-operation">
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
                                <th className="th-s">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td className="td-s">1</td>
                                <td className="td-s">payment</td>
                                <td className="td-s">Ahmed Elhady</td>
                                <td className="td-s">9/5/2026</td>
                                <td className="td-s ">
                                    <p className="p-2 px-4 rounded-lg bg-green-500/10 text-green-400/80 w-max">Done</p>
                                </td>
                                <td className="td-s">1234567</td>
                                <td className="td-s">
                                    <div className="actions flex gap-2 ">
                                        <button className="p-2 hover:bg-red-500/30 px-3 rounded-lg text-lg bg-red-400/20 cursor-pointer ">
                                            <i className="far fa-trash text-red-500"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="td-s">2</td>
                                <td className="td-s">Attendance</td>
                                <td className="td-s">Omar Elhady</td>
                                <td className="td-s">10/5/2026</td>
                                <td className="td-s ">
                                    <p className="p-2 px-4 rounded-lg bg-red-400/10 text-red-400/80 w-max">Error</p>
                                </td>
                                <td className="td-s">8910111</td>
                                <td className="td-s">
                                    <div className="actions flex gap-2 ">
                                        <button className="p-2 hover:bg-red-500/30 px-3 rounded-lg text-lg bg-red-400/20 cursor-pointer ">
                                            <i className="far fa-trash text-red-500"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>




                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LastOperation;
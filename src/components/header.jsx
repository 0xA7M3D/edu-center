import img from "../assets/images/image.png"

function Header(){
    return(
        <div className="header border-b border-gray-800 w-full p-3 flex justify-between gap-2 items-center">
            
            
            
            <div className="inp ml-11 w-[420px] flex items-center gap-2 border border-gray-700/70 bg-gray-600/10 rounded-lg pr-3">
                <i className="far fa-search text-lg pl-4 text-gray-600"></i>
                <input className="p-3 text-sm outline-none w-full" type="text" placeholder="Search students,numbers" />
                <div className="short-cut flex gap-2 text-xs text-gray-400 bg-blue-950/40 w-min p-1 px-2.5 rounded-lg items-center ">
                    <p className="font-semibold">&#8984;</p>
                    <p className="font-bold">K</p>
                </div>
            </div>

            <div className="r flex gap-3 items-center">
                <div className="date flex gap-3 items-center">
                    <i className="fa fa-calendar-day text-gray-600"></i>
                   <p className="text-gray-300"> 8 May 2026</p>
                </div>

                <hr className="w-px h-7 mx-2 border-none bg-gray-700"/>
                    <div className="notefications relative text-xl px-2 ">
                        <i className="fa fa-bell text-gray-200"></i>
                        <p className="count">0</p>
                    </div>
                <div className="info">
                    <div className="profile-small flex gap-3 items-center">
                        <img className="w-13 h-13 rounded-full" src={img} alt="" />
                        <div className="text-info-small">
                            <p className="text-lg">Ahmed Elhady</p>
                            <p className="text-sm text-gray-600">Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
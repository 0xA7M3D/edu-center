
import SvgIcon from "./svg-scan";
function NavOther() {
    return(
        <div className="nav_other w-87 flex-none ">
                <div className="box flex-col sticky top-0">
                    <h1 className="text-xl">QR-Code Check in</h1>
                    <p className="text-sm text-gray-600">Scan student qr fro attendance or payment</p>
                    <SvgIcon/>
                    <button className="bg-linear-to-r text-sm from-blue-600 to-violet-600 p-2 cursor-pointer rounded-lg mt-2">
                        <i className="fas fa-qrcode pr-2"></i>
                        Open Scanner
                    </button>
                </div>
            </div>
    )
}

export default NavOther
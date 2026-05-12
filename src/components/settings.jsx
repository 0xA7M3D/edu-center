function Settings(){
    return(
        <div className="settings content-page">
            <div className="hero-stu">
                <h2 className="h2a">All Settings</h2>
                <p className="pa">you can edite some settings </p>
            </div>

            <div className="box mt-4 flex flex-col gap-5">
                <h1 className="text-gray-700 text-2xl text-center w-full">Not Found anything here now </h1>
                <label className="flex gap-10" htmlFor="inpc1">
                    <p>Example Setting 1</p>
                    <input className="input-chekBox" type="checkbox" name="" id="inpc1" />
                </label>
                <label className="flex gap-10" htmlFor="inpc2">
                    <p>Example Setting 2</p>
                    <input className="input-chekBox" type="checkbox" name="" id="inpc2" />
                </label>
            </div>
        </div>
    )
}

export default Settings;
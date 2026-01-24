import IdField from "../components/IdField"
import HomeButtons from "../components/HomeButtons"
import { goto } from "../assets/utils"
import { useState } from "react"

const HomePage = () => {
    const [otp, setOtp] = useState('');
    const generateID = () => {
        const min = 100000;
        const max = 999999;
        const newOtp = Math.floor(Math.random() * (max - min + 1)) + min;
        setOtp(newOtp)
        alert(`Generated OTP: ${newOtp}`);
    };

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className=" p-8 bg-base-200 rounded shadow-lg grid grid-cols-2 place-items-center gap-4">
                    <div className="border-r-4 pl-4 pr-4">
                        <h1 className="font-bold text-2xl m-4">Host</h1>
                        <button onClick={generateID} className="btn btn-secondary">Generate ID</button>
                        <br />
                        <HomeButtons inField="New Meet" color="primary" onClick={() => goto('/meeting')} />
                    </div>
                    <div className="pl-4">
                        <h1 className="font-bold text-2xl m-4">Particpant</h1>
                        <IdField id = {otp} margin="m-2" placeholder="Enter Room Id" logo={'->'} />
                        <br />
                        <HomeButtons inField="Join Meet" color="primary" />
                    </div>
                </div>
            </div>

        </>
    )
}


export default HomePage
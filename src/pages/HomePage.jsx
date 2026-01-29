import { useState } from "react"
import { generateID, goto } from "../assets/utils"
import IdField from "../components/IdField"

const HomePage = () => {
    const [otp, setOtp] = useState(generateID)
    const [userOtp, setUserOtp] = useState(null)

    const newMeeting = () => {
        localStorage.setItem(otp, 1)
        goto('/meeting/' + otp)
    }
    const joinMeeting = () => {
        let user = localStorage.getItem(userOtp)
        console.log(user)

        if (user == null) {
            alert('Invalid ID')
            return
        }
        let val = parseInt(user)
        localStorage.setItem(userOtp, val + 1)
        goto('/meeting/' + userOtp)
    }

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className=" bg-base-200 rounded shadow-xl grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center p-4 border-r-2">
                        <h1 className="font-bold text-2xl m-4">Host</h1>
                        <div className="flex gap-2">
                            <p className="mt-2 p">Meeting code: <span className="border-secondary border-dashed border-1 p-2 rounded-md">{otp}</span></p>
                            <button onClick={() => setOtp(generateID)} className="btn btn-secondary">↺</button>
                        </div>
                        <br />
                        <button onClick={newMeeting} className="btn btn-primary">New Meeting</button>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <h1 className="font-bold text-2xl m-4">Particpant</h1>
                        <IdField setOtp={setUserOtp} placeholder="Enter Room Id" logo={'➔'} />
                        <br />
                        <button onClick={joinMeeting} className="btn btn-primary">Join Meeting</button>
                    </div>
                </div>
            </div>

        </>
    )
}


export default HomePage
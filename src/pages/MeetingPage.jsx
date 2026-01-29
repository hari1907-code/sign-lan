import { ClosedCaptionIcon, MicIcon, PhoneIcon, VideoIcon } from "lucide-react"
import { useRef } from "react"
import Camerae from "../components/Camera"
import ChatBox from "../components/ChatBox"
import Meet from "../components/MeetingNavbut"
import { Navigate } from "react-router"
import { goto } from "../assets/utils"
const MeetingPage = () => {

    const cameraRef = useRef(null)

    return (
        <>
            <div className="bg-base-200 p-4 h-screen">

                <div className="navbar h-8 max-w-full flex items-center justify-center bg-base-100 shadow-xl mb-5 rounded-2xl   ">
                    <div className="navbar-center">
                        <Meet inField={<VideoIcon />} color="primary" onClick={() => cameraRef.current.toggleCamera()} />
                        <Meet inField={<MicIcon />} color="accent-content" />
                        <Meet inField={<ClosedCaptionIcon />} color="accent-content" />
                        <Meet inField={<PhoneIcon />} color="accent-content" onClick={() => goto('/')} />

                    </div>
                </div>

                <div className="flex items-center gap-2 p-4 mb-4  shadow-lg rounded-2xl bg-base-100">

                    <Camerae ref={cameraRef} />
                   
                </div>

                <div className="flex items-center gap-2  shadow-lg  rounded-2xl bg-base-100">
                    <ChatBox />
                </div>

            </div>
        </>
    )
}


export default MeetingPage
import { ClosedCaptionIcon, MicIcon, PhoneIcon, VideoIcon } from "lucide-react"
import { useRef } from "react"
import Camerae from "../components/Camera"
import ChatBox from "../components/ChatBox"
import Meet from "../components/MeetingNavbut"
import { Navigate, useParams } from "react-router"
import { goto } from "../assets/utils"
const MeetingPage = () => {

    const cameraRef = useRef([])
    let { id } = useParams()

    let participantCount = parseInt(localStorage.getItem(id))


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

                <div className=" h-125 flex items-center gap-2 p-4 mb-4  shadow-lg rounded-2xl bg-base-100">
                    {[...Array(participantCount)].map((_, i) => <Camerae key={i} ref={(ref) => cameraRef.current[i] = ref} />)}
                </div>

                <div className="flex flex-row items-center gap-2 p-2 shadow-lg  rounded-2xl bg-base-100">
                    <div className="flex flex-col-reverse justify-center p-4 basis-1/3 bg-amber-200">
                        <ChatBox />
                    </div>
                    <div className="flex flex-row p-4 basis-2/3 bg-amber-200">
                        {/* Meeting Info  */}
                    </div>
                </div>

            </div>
        </>
    )
}


export default MeetingPage
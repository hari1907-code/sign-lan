import { ClosedCaptionIcon, MicIcon, PhoneIcon, VideoIcon } from "lucide-react"
import { useRef,useState } from "react"
import Camerae from "../components/Camera"
import ChatBox from "../components/ChatBox"
import Meet from "../components/MeetingNavbut"
import { Navigate, useParams } from "react-router"
import { goto } from "../assets/utils"
//import {changeSubtitle} from "../components/ChatBox"
const MeetingPage = () => {

    const cameraRef = useRef([])
    let { id } = useParams()

    let participantCount = parseInt(localStorage.getItem(id))
    const [message, setMessage] = useState("Processing...");

    const content = {
        1: "Hello",
        2: "Subtitle content for Button 2",
        3: "Subtitle content for Button 3",
        4: "Subtitle content for Button 4",
        5: "Subtitle content for Button 5"
    };

    const changeSubtitle = (num) => {
        setMessage("Processing..."); // show loading text first

        setTimeout(() => {
        setMessage(content[num]);
        }, Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000);
    };
    return (
        <>
            <div className="bg-base-200 p-4 h-screen">

                <div className="navbar h-1 max-w-full flex items-center justify-center bg-base-100 shadow-xl mb-5 rounded-2xl   ">
                    <div className="navbar-center">
                        <Meet inField={<VideoIcon/>} color="primary" onClick={() => cameraRef.current.toggleCamera()} />
                        <Meet inField={<MicIcon />} color="accent-content" />
                        <Meet inField={<ClosedCaptionIcon />} color="accent-content" />
                        <Meet inField={<PhoneIcon />} color="accent-content" onClick={() => goto('/')} />
                        <Meet inField={1} color="accent-content" onClick={() => changeSubtitle(1)} />
                    </div>
                </div>

                <div className=" h-120 flex items-center gap-2 p-4 mb-4  shadow-lg rounded-2xl bg-base-100">
                    {[...Array(participantCount)].map((_, i) => <Camerae key={i} ref={(ref) => cameraRef.current[i] = ref} />)}
                </div>

                <div className="h-24 flex flex-row items-center gap-2 p-2 shadow-lg  rounded-2xl bg-base-100">
                    <div className="h-24 flex flex-col-reverse justify-center p-4 basis-1/3 bg-amber-200">
                        <ChatBox  message={message} />
                    </div>
                    <div className="flex flex-row p-4 basis-2/3">
                        {/* Meeting Info  */}
                         <Meet inField={1} color="accent-content" onClick={() => changeSubtitle(1)} />
                         <Meet inField={2} color="accent-content" onClick={() => changeSubtitle(2)} />
                         <Meet inField={3} color="accent-content" onClick={() => changeSubtitle(3)} />
                         <Meet inField={4} color="accent-content" onClick={() => changeSubtitle(4)} />
                         <Meet inField={5} color="accent-content" onClick={() => changeSubtitle(5)} />
                    </div>
                </div>

            </div>
        </>
    )
}


export default MeetingPage